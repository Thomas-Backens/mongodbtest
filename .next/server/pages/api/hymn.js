(() => {
var exports = {};
exports.id = "pages/api/hymn";
exports.ids = ["pages/api/hymn"];
exports.modules = {

/***/ "./src/Utils/db.js":
/*!*************************!*\
  !*** ./src/Utils/db.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  MongoClient
} = __webpack_require__(/*! mongodb */ "mongodb");

const uri = "mongodb+srv://mongomastercluster:Homeschool20035@cluster0.yp2ivel.mongodb.net/?retryWrites=true&w=majority"; // async function dbMain(query) {
//   const uri =
//     "mongodb+srv://mongomastercluster:Homeschool20035@cluster0.yp2ivel.mongodb.net/?retryWrites=true&w=majority";
//   const client = new MongoClient(uri);
//   try {
//     await client.connect();
//     await query(client);
// await deleteListingsByNumberOfBedrooms(client, 2);
// await deleteListingByName(client, "room 3");
// await updateListingByName(client, "room 2", { bedrooms: 10 });
// await findManyListings(client, {
//   minimumNumberOfBedrooms: 0,
//   minimumNumberOfBathrooms: 0,
//   maximumNumberOfResults: 50000,
// });
// await findOneHymnByName(client, "Come Thou Fount");
// await createMultipleListings(client, [
//   {
//     name: "room 1",
//     bedrooms: 1,
//     bathrooms: 1,
//   },
//   {
//     name: "room 2",
//     bedrooms: 2,
//     bathrooms: 1,
//   },
//   {
//     name: "room 3",
//     bedrooms: 2,
//     bathrooms: 2,
//   },
// ]);
// await createListing(client, {
//   name: "Loft",
//   summary: "It's a Loft",
//   bedrooms: 2,
//   bathrooms: 1,
// });
// await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }
// dbMain(getAllHymns()).catch(console.error);

const getAllHymns = async () => {
  const client = new MongoClient(uri);
  let result = {};

  try {
    await client.connect();
    const cursor = client.db("AllHymns").collection("Hymns").find({
      _id: {
        $gte: 0
      }
    });
    result = await cursor.toArray(); // console.log(result);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }

  return result;
}; // getAllHymns().catch(console.error);


async function deleteListingsByNumberOfBedrooms(client, numberOfBedrooms) {
  const result = await client.db("sample_airbnb").collection("listingsAndReviews").deleteMany({
    bedrooms: {
      $lt: numberOfBedrooms
    }
  });
  console.log(`${result.deletedCount} document(s) was/were deleted`);
}

async function deleteListingByName(client, nameOfListing) {
  const result = await client.db("sample_airbnb").collection("listingsAndReviews").deleteOne({
    name: nameOfListing
  });
  console.log(`${result.deletedCount} document(s) was/were deleted`);
}

async function updateListingByName(client, nameOfListing, updatedListing) {
  const result = await client.db("sample_airbnb").collection("listingsAndReviews").updateOne({
    name: nameOfListing
  }, {
    $set: updatedListing
  });
  console.log(`${result.matchedCount} document(s) matched the query criteria`);
  console.log(`${result.modifiedCount} document(s) was/were updated`);
}

async function findManyListings(client, {
  minimumNumberOfBedrooms = 0,
  minimumNumberOfBathrooms = 0,
  maximumNumberOfResults = Number.MAX_SAFE_INTEGER
}) {
  const cursor = await client.db("sample_airbnb").collection("listingsAndReviews").find({
    bedrooms: {
      $gte: minimumNumberOfBedrooms
    },
    bathrooms: {
      $gte: minimumNumberOfBathrooms
    }
  }).limit(maximumNumberOfResults);
  const results = await cursor.toArray();

  if (results.length > 0) {
    console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
    results.forEach((result, i) => {
      console.log();
      console.log(`${i + 1}. name: ${result.name}`);
      console.log(`    _id: ${result._id}`);
      console.log(`    bedrooms: ${result.bedrooms}`);
      console.log(`    bathrooms: ${result.bathrooms}`);
    });
  } else {
    console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
  }
}

async function findOneHymnByName(client, nameOfHymn) {
  const result = await client.db("AllHymns").collection("Hymns").findOne({
    name: nameOfHymn
  });

  if (result) {
    console.log(`Found a Hymn in the collection with the name '${nameOfHymn}'`);
    console.log(result);
  } else {
    console.log(`No Hymns found with the name '${nameOfHymn}'`);
  }
}

async function createMultipleListings(client, newListings) {
  const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);
  console.log(`${result.insertedCount} new listings created with the following id(s):`);
  console.log(result.insertedIds);
}

async function createListing(client, newListing) {
  const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => {
    console.log(`- ${db.name}`);
  });
}

module.exports = {
  getAllHymns
};

/***/ }),

/***/ "./src/pages/api/hymn.js":
/*!*******************************!*\
  !*** ./src/pages/api/hymn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mongoQuery = __webpack_require__(/*! ../../Utils/db */ "./src/Utils/db.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const hymns = await mongoQuery.getAllHymns();
        res.status(200).json({
          hymns
        });
        break;
      } catch (err) {
        return res.status(500).json({
          message: err.message
        });
      }

    default:
      return res.status(405).send("Method Not Allowed");
  }
});

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/hymn.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsT0FBTyxFQUFFRCxHQUFHLENBQUNDO0FBQWYsU0FBckIsQ0FBUDtBQUNEOztBQUVIO0FBQ0UsYUFBT04sR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkksSUFBaEIsQ0FBcUIsb0JBQXJCLENBQVA7QUFYSjtBQWFELENBZEQ7Ozs7Ozs7Ozs7O0FDRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL3NyYy9VdGlscy9kYi5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC8uL3NyYy9wYWdlcy9hcGkvaHltbi5qcyIsIndlYnBhY2s6Ly9tb25nb2RidGVzdC9leHRlcm5hbCBcIm1vbmdvZGJcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IE1vbmdvQ2xpZW50IH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcclxuXHJcbmNvbnN0IHVyaSA9XHJcbiAgXCJtb25nb2RiK3NydjovL21vbmdvbWFzdGVyY2x1c3RlcjpIb21lc2Nob29sMjAwMzVAY2x1c3RlcjAueXAyaXZlbC5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBkYk1haW4ocXVlcnkpIHtcclxuLy8gICBjb25zdCB1cmkgPVxyXG4vLyAgICAgXCJtb25nb2RiK3NydjovL21vbmdvbWFzdGVyY2x1c3RlcjpIb21lc2Nob29sMjAwMzVAY2x1c3RlcjAueXAyaXZlbC5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XHJcblxyXG4vLyAgIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkpO1xyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcclxuXHJcbi8vICAgICBhd2FpdCBxdWVyeShjbGllbnQpO1xyXG5cclxuLy8gYXdhaXQgZGVsZXRlTGlzdGluZ3NCeU51bWJlck9mQmVkcm9vbXMoY2xpZW50LCAyKTtcclxuXHJcbi8vIGF3YWl0IGRlbGV0ZUxpc3RpbmdCeU5hbWUoY2xpZW50LCBcInJvb20gM1wiKTtcclxuXHJcbi8vIGF3YWl0IHVwZGF0ZUxpc3RpbmdCeU5hbWUoY2xpZW50LCBcInJvb20gMlwiLCB7IGJlZHJvb21zOiAxMCB9KTtcclxuXHJcbi8vIGF3YWl0IGZpbmRNYW55TGlzdGluZ3MoY2xpZW50LCB7XHJcbi8vICAgbWluaW11bU51bWJlck9mQmVkcm9vbXM6IDAsXHJcbi8vICAgbWluaW11bU51bWJlck9mQmF0aHJvb21zOiAwLFxyXG4vLyAgIG1heGltdW1OdW1iZXJPZlJlc3VsdHM6IDUwMDAwLFxyXG4vLyB9KTtcclxuXHJcbi8vIGF3YWl0IGZpbmRPbmVIeW1uQnlOYW1lKGNsaWVudCwgXCJDb21lIFRob3UgRm91bnRcIik7XHJcblxyXG4vLyBhd2FpdCBjcmVhdGVNdWx0aXBsZUxpc3RpbmdzKGNsaWVudCwgW1xyXG4vLyAgIHtcclxuLy8gICAgIG5hbWU6IFwicm9vbSAxXCIsXHJcbi8vICAgICBiZWRyb29tczogMSxcclxuLy8gICAgIGJhdGhyb29tczogMSxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIG5hbWU6IFwicm9vbSAyXCIsXHJcbi8vICAgICBiZWRyb29tczogMixcclxuLy8gICAgIGJhdGhyb29tczogMSxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIG5hbWU6IFwicm9vbSAzXCIsXHJcbi8vICAgICBiZWRyb29tczogMixcclxuLy8gICAgIGJhdGhyb29tczogMixcclxuLy8gICB9LFxyXG4vLyBdKTtcclxuXHJcbi8vIGF3YWl0IGNyZWF0ZUxpc3RpbmcoY2xpZW50LCB7XHJcbi8vICAgbmFtZTogXCJMb2Z0XCIsXHJcbi8vICAgc3VtbWFyeTogXCJJdCdzIGEgTG9mdFwiLFxyXG4vLyAgIGJlZHJvb21zOiAyLFxyXG4vLyAgIGJhdGhyb29tczogMSxcclxuLy8gfSk7XHJcblxyXG4vLyBhd2FpdCBsaXN0RGF0YWJhc2VzKGNsaWVudCk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgY29uc29sZS5lcnJvcihlKTtcclxuLy8gICB9IGZpbmFsbHkge1xyXG4vLyAgICAgYXdhaXQgY2xpZW50LmNsb3NlKCk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBkYk1haW4oZ2V0QWxsSHltbnMoKSkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcblxyXG5jb25zdCBnZXRBbGxIeW1ucyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpKTtcclxuICBsZXQgcmVzdWx0ID0ge307XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnNvciA9IGNsaWVudFxyXG4gICAgICAuZGIoXCJBbGxIeW1uc1wiKVxyXG4gICAgICAuY29sbGVjdGlvbihcIkh5bW5zXCIpXHJcbiAgICAgIC5maW5kKHtcclxuICAgICAgICBfaWQ6IHsgJGd0ZTogMCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXN1bHQgPSBhd2FpdCBjdXJzb3IudG9BcnJheSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBhd2FpdCBjbGllbnQuY2xvc2UoKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbi8vIGdldEFsbEh5bW5zKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkZWxldGVMaXN0aW5nc0J5TnVtYmVyT2ZCZWRyb29tcyhjbGllbnQsIG51bWJlck9mQmVkcm9vbXMpIHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnRcclxuICAgIC5kYihcInNhbXBsZV9haXJibmJcIilcclxuICAgIC5jb2xsZWN0aW9uKFwibGlzdGluZ3NBbmRSZXZpZXdzXCIpXHJcbiAgICAuZGVsZXRlTWFueSh7IGJlZHJvb21zOiB7ICRsdDogbnVtYmVyT2ZCZWRyb29tcyB9IH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhgJHtyZXN1bHQuZGVsZXRlZENvdW50fSBkb2N1bWVudChzKSB3YXMvd2VyZSBkZWxldGVkYCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUxpc3RpbmdCeU5hbWUoY2xpZW50LCBuYW1lT2ZMaXN0aW5nKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50XHJcbiAgICAuZGIoXCJzYW1wbGVfYWlyYm5iXCIpXHJcbiAgICAuY29sbGVjdGlvbihcImxpc3RpbmdzQW5kUmV2aWV3c1wiKVxyXG4gICAgLmRlbGV0ZU9uZSh7IG5hbWU6IG5hbWVPZkxpc3RpbmcgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGAke3Jlc3VsdC5kZWxldGVkQ291bnR9IGRvY3VtZW50KHMpIHdhcy93ZXJlIGRlbGV0ZWRgKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTGlzdGluZ0J5TmFtZShjbGllbnQsIG5hbWVPZkxpc3RpbmcsIHVwZGF0ZWRMaXN0aW5nKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50XHJcbiAgICAuZGIoXCJzYW1wbGVfYWlyYm5iXCIpXHJcbiAgICAuY29sbGVjdGlvbihcImxpc3RpbmdzQW5kUmV2aWV3c1wiKVxyXG4gICAgLnVwZGF0ZU9uZSh7IG5hbWU6IG5hbWVPZkxpc3RpbmcgfSwgeyAkc2V0OiB1cGRhdGVkTGlzdGluZyB9KTtcclxuXHJcbiAgY29uc29sZS5sb2coYCR7cmVzdWx0Lm1hdGNoZWRDb3VudH0gZG9jdW1lbnQocykgbWF0Y2hlZCB0aGUgcXVlcnkgY3JpdGVyaWFgKTtcclxuICBjb25zb2xlLmxvZyhgJHtyZXN1bHQubW9kaWZpZWRDb3VudH0gZG9jdW1lbnQocykgd2FzL3dlcmUgdXBkYXRlZGApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmaW5kTWFueUxpc3RpbmdzKFxyXG4gIGNsaWVudCxcclxuICB7XHJcbiAgICBtaW5pbXVtTnVtYmVyT2ZCZWRyb29tcyA9IDAsXHJcbiAgICBtaW5pbXVtTnVtYmVyT2ZCYXRocm9vbXMgPSAwLFxyXG4gICAgbWF4aW11bU51bWJlck9mUmVzdWx0cyA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxyXG4gIH1cclxuKSB7XHJcbiAgY29uc3QgY3Vyc29yID0gYXdhaXQgY2xpZW50XHJcbiAgICAuZGIoXCJzYW1wbGVfYWlyYm5iXCIpXHJcbiAgICAuY29sbGVjdGlvbihcImxpc3RpbmdzQW5kUmV2aWV3c1wiKVxyXG4gICAgLmZpbmQoe1xyXG4gICAgICBiZWRyb29tczogeyAkZ3RlOiBtaW5pbXVtTnVtYmVyT2ZCZWRyb29tcyB9LFxyXG4gICAgICBiYXRocm9vbXM6IHsgJGd0ZTogbWluaW11bU51bWJlck9mQmF0aHJvb21zIH0sXHJcbiAgICB9KVxyXG4gICAgLmxpbWl0KG1heGltdW1OdW1iZXJPZlJlc3VsdHMpO1xyXG5cclxuICBjb25zdCByZXN1bHRzID0gYXdhaXQgY3Vyc29yLnRvQXJyYXkoKTtcclxuXHJcbiAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGBGb3VuZCBsaXN0aW5nKHMpIHdpdGggYXQgbGVhc3QgJHttaW5pbXVtTnVtYmVyT2ZCZWRyb29tc30gYmVkcm9vbXMgYW5kICR7bWluaW11bU51bWJlck9mQmF0aHJvb21zfSBiYXRocm9vbXM6YFxyXG4gICAgKTtcclxuICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0LCBpKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAke2kgKyAxfS4gbmFtZTogJHtyZXN1bHQubmFtZX1gKTtcclxuICAgICAgY29uc29sZS5sb2coYCAgICBfaWQ6ICR7cmVzdWx0Ll9pZH1gKTtcclxuICAgICAgY29uc29sZS5sb2coYCAgICBiZWRyb29tczogJHtyZXN1bHQuYmVkcm9vbXN9YCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAgICAgYmF0aHJvb21zOiAke3Jlc3VsdC5iYXRocm9vbXN9YCk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGBObyBsaXN0aW5ncyBmb3VuZCB3aXRoIGF0IGxlYXN0ICR7bWluaW11bU51bWJlck9mQmVkcm9vbXN9IGJlZHJvb21zIGFuZCAke21pbmltdW1OdW1iZXJPZkJhdGhyb29tc30gYmF0aHJvb21zYFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZpbmRPbmVIeW1uQnlOYW1lKGNsaWVudCwgbmFtZU9mSHltbikge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudFxyXG4gICAgLmRiKFwiQWxsSHltbnNcIilcclxuICAgIC5jb2xsZWN0aW9uKFwiSHltbnNcIilcclxuICAgIC5maW5kT25lKHsgbmFtZTogbmFtZU9mSHltbiB9KTtcclxuXHJcbiAgaWYgKHJlc3VsdCkge1xyXG4gICAgY29uc29sZS5sb2coYEZvdW5kIGEgSHltbiBpbiB0aGUgY29sbGVjdGlvbiB3aXRoIHRoZSBuYW1lICcke25hbWVPZkh5bW59J2ApO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coYE5vIEh5bW5zIGZvdW5kIHdpdGggdGhlIG5hbWUgJyR7bmFtZU9mSHltbn0nYCk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVNdWx0aXBsZUxpc3RpbmdzKGNsaWVudCwgbmV3TGlzdGluZ3MpIHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnRcclxuICAgIC5kYihcInNhbXBsZV9haXJibmJcIilcclxuICAgIC5jb2xsZWN0aW9uKFwibGlzdGluZ3NBbmRSZXZpZXdzXCIpXHJcbiAgICAuaW5zZXJ0TWFueShuZXdMaXN0aW5ncyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgYCR7cmVzdWx0Lmluc2VydGVkQ291bnR9IG5ldyBsaXN0aW5ncyBjcmVhdGVkIHdpdGggdGhlIGZvbGxvd2luZyBpZChzKTpgXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhyZXN1bHQuaW5zZXJ0ZWRJZHMpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVMaXN0aW5nKGNsaWVudCwgbmV3TGlzdGluZykge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudFxyXG4gICAgLmRiKFwic2FtcGxlX2FpcmJuYlwiKVxyXG4gICAgLmNvbGxlY3Rpb24oXCJsaXN0aW5nc0FuZFJldmlld3NcIilcclxuICAgIC5pbnNlcnRPbmUobmV3TGlzdGluZyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgYE5ldyBsaXN0aW5nIGNyZWF0ZWQgd2l0aCB0aGUgZm9sbG93aW5nIGlkOiAke3Jlc3VsdC5pbnNlcnRlZElkfWBcclxuICApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsaXN0RGF0YWJhc2VzKGNsaWVudCkge1xyXG4gIGNvbnN0IGRhdGFiYXNlc0xpc3QgPSBhd2FpdCBjbGllbnQuZGIoKS5hZG1pbigpLmxpc3REYXRhYmFzZXMoKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJEYXRhYmFzZXM6XCIpO1xyXG4gIGRhdGFiYXNlc0xpc3QuZGF0YWJhc2VzLmZvckVhY2goKGRiKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgLSAke2RiLm5hbWV9YCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGdldEFsbEh5bW5zLFxyXG59O1xyXG4iLCJjb25zdCBtb25nb1F1ZXJ5ID0gcmVxdWlyZShcIi4uLy4uL1V0aWxzL2RiXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaHltbnMgPSBhd2FpdCBtb25nb1F1ZXJ5LmdldEFsbEh5bW5zKCk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBoeW1ucyB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLnNlbmQoXCJNZXRob2QgTm90IEFsbG93ZWRcIik7XHJcbiAgfVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInJlcXVpcmUiLCJ1cmkiLCJnZXRBbGxIeW1ucyIsImNsaWVudCIsInJlc3VsdCIsImNvbm5lY3QiLCJjdXJzb3IiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kIiwiX2lkIiwiJGd0ZSIsInRvQXJyYXkiLCJlIiwiY29uc29sZSIsImVycm9yIiwiY2xvc2UiLCJkZWxldGVMaXN0aW5nc0J5TnVtYmVyT2ZCZWRyb29tcyIsIm51bWJlck9mQmVkcm9vbXMiLCJkZWxldGVNYW55IiwiYmVkcm9vbXMiLCIkbHQiLCJsb2ciLCJkZWxldGVkQ291bnQiLCJkZWxldGVMaXN0aW5nQnlOYW1lIiwibmFtZU9mTGlzdGluZyIsImRlbGV0ZU9uZSIsIm5hbWUiLCJ1cGRhdGVMaXN0aW5nQnlOYW1lIiwidXBkYXRlZExpc3RpbmciLCJ1cGRhdGVPbmUiLCIkc2V0IiwibWF0Y2hlZENvdW50IiwibW9kaWZpZWRDb3VudCIsImZpbmRNYW55TGlzdGluZ3MiLCJtaW5pbXVtTnVtYmVyT2ZCZWRyb29tcyIsIm1pbmltdW1OdW1iZXJPZkJhdGhyb29tcyIsIm1heGltdW1OdW1iZXJPZlJlc3VsdHMiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwiYmF0aHJvb21zIiwibGltaXQiLCJyZXN1bHRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsImkiLCJmaW5kT25lSHltbkJ5TmFtZSIsIm5hbWVPZkh5bW4iLCJmaW5kT25lIiwiY3JlYXRlTXVsdGlwbGVMaXN0aW5ncyIsIm5ld0xpc3RpbmdzIiwiaW5zZXJ0TWFueSIsImluc2VydGVkQ291bnQiLCJpbnNlcnRlZElkcyIsImNyZWF0ZUxpc3RpbmciLCJuZXdMaXN0aW5nIiwiaW5zZXJ0T25lIiwiaW5zZXJ0ZWRJZCIsImxpc3REYXRhYmFzZXMiLCJkYXRhYmFzZXNMaXN0IiwiYWRtaW4iLCJkYXRhYmFzZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9uZ29RdWVyeSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImh5bW5zIiwic3RhdHVzIiwianNvbiIsImVyciIsIm1lc3NhZ2UiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==