const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://mongomastercluster:Homeschool20035@cluster0.yp2ivel.mongodb.net/?retryWrites=true&w=majority";

// async function dbMain(query) {
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

    const cursor = client
      .db("AllHymns")
      .collection("Hymns")
      .find({
        _id: { $gte: 0 },
      });

    result = await cursor.toArray();
    // console.log(result);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
  return result;
};

// getAllHymns().catch(console.error);

async function deleteListingsByNumberOfBedrooms(client, numberOfBedrooms) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .deleteMany({ bedrooms: { $lt: numberOfBedrooms } });

  console.log(`${result.deletedCount} document(s) was/were deleted`);
}

async function deleteListingByName(client, nameOfListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .deleteOne({ name: nameOfListing });

  console.log(`${result.deletedCount} document(s) was/were deleted`);
}

async function updateListingByName(client, nameOfListing, updatedListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .updateOne({ name: nameOfListing }, { $set: updatedListing });

  console.log(`${result.matchedCount} document(s) matched the query criteria`);
  console.log(`${result.modifiedCount} document(s) was/were updated`);
}

async function findManyListings(
  client,
  {
    minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER,
  }
) {
  const cursor = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .find({
      bedrooms: { $gte: minimumNumberOfBedrooms },
      bathrooms: { $gte: minimumNumberOfBathrooms },
    })
    .limit(maximumNumberOfResults);

  const results = await cursor.toArray();

  if (results.length > 0) {
    console.log(
      `Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`
    );
    results.forEach((result, i) => {
      console.log();
      console.log(`${i + 1}. name: ${result.name}`);
      console.log(`    _id: ${result._id}`);
      console.log(`    bedrooms: ${result.bedrooms}`);
      console.log(`    bathrooms: ${result.bathrooms}`);
    });
  } else {
    console.log(
      `No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`
    );
  }
}

async function findOneHymnByName(client, nameOfHymn) {
  const result = await client
    .db("AllHymns")
    .collection("Hymns")
    .findOne({ name: nameOfHymn });

  if (result) {
    console.log(`Found a Hymn in the collection with the name '${nameOfHymn}'`);
    console.log(result);
  } else {
    console.log(`No Hymns found with the name '${nameOfHymn}'`);
  }
}

async function createMultipleListings(client, newListings) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertMany(newListings);

  console.log(
    `${result.insertedCount} new listings created with the following id(s):`
  );
  console.log(result.insertedIds);
}

async function createListing(client, newListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertOne(newListing);

  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}

module.exports = {
  getAllHymns,
};
