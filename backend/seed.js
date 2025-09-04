// // // // // // seed.js
// // // // // const mongoose = require("mongoose");
// // // // // const Video = require("./models/Video");
// // // // // require("dotenv").config();

// // // // // const videos = [
// // // // //   {
// // // // //     title: "Learn React in 30 Minutes",
// // // // //     description: "Quick React tutorial for beginners.",
// // // // //     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // // //     thumbnailUrl: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
// // // // //     category: "Education",
// // // // //     channel: "68aef21748b33784ea45b89a", // your channel _id
// // // // //   },
// // // // //   {
// // // // //     title: "Messi vs Ronaldo – Who’s the GOAT? ⚽",
// // // // //     description: "The ultimate football rivalry.",
// // // // //     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // // //     thumbnailUrl: "https://i.ytimg.com/vi/kxopViU98Xo/hqdefault.jpg",
// // // // //     category: "Sports",
// // // // //     channel: "68aef21748b33784ea45b89a",
// // // // //   },
// // // // //   {
// // // // //     title: "LoFi Beats to Relax & Study 🎵",
// // // // //     description: "Soft LoFi tracks for late-night vibes.",
// // // // //     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // // //     thumbnailUrl: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg",
// // // // //     category: "Music",
// // // // //     channel: "68aef21748b33784ea45b89a",
// // // // //   },
// // // // //   // aur bhi 15–20 add karo mockVideos.js ke jaise
// // // // // ];

// // // // // async function seed() {
// // // // //   await mongoose.connect(process.env.MONGO_URI);
// // // // //   await Video.deleteMany({});
// // // // //   await Video.insertMany(videos);
// // // // //   console.log("✅ Videos seeded successfully!");
// // // // //   mongoose.disconnect();
// // // // // }

// // // // // seed();





// // // // // -------
// // // // const mongoose = require("mongoose");
// // // // const Video = require("./models/Video");
// // // // const Channel = require("./models/Channel");

// // // // const MONGO_URI = "mongodb://127.0.0.1:27017/ytclone";

// // // // async function seed() {
// // // //   try {
// // // //     await mongoose.connect(MONGO_URI);
// // // //     console.log("MongoDB connected");

// // // //     await Video.deleteMany({});
// // // //     await Channel.deleteMany({});

// // // //     const channels = await Channel.insertMany([
// // // //       {
// // // //         channelName: "Code with John",
// // // //         description: "Programming tutorials and tech tips.",
// // // //         owner: new mongoose.Types.ObjectId(),
// // // //         banner: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
// // // //       },
// // // //       {
// // // //         channelName: "Travel with Mia",
// // // //         description: "Exploring the world, one place at a time.",
// // // //         owner: new mongoose.Types.ObjectId(),
// // // //         banner: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
// // // //       },
// // // //       {
// // // //         channelName: "Chill Vibes",
// // // //         description: "LoFi & relaxing beats.",
// // // //         owner: new mongoose.Types.ObjectId(),
// // // //         banner: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
// // // //       },
// // // //       {
// // // //         channelName: "Sports Central",
// // // //         description: "Highlights and analysis from sports.",
// // // //         owner: new mongoose.Types.ObjectId(),
// // // //         banner: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80",
// // // //       },
// // // //     ]);

// // // //     const videos = [
// // // //       {
// // // //         title: "Learn React in 30 Minutes",
// // // //         description: "Quick React tutorial for beginners.",
// // // //         videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // //         thumbnailUrl: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
// // // //         channel: channels[0]._id,
// // // //         category: "Education",
// // // //       },
// // // //       {
// // // //         title: "Node.js Crash Course",
// // // //         description: "Everything you need to start with Node.js.",
// // // //         videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // //         thumbnailUrl: "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg",
// // // //         channel: channels[0]._id,
// // // //         category: "Education",
// // // //       },
// // // //       {
// // // //         title: "Exploring Bali – Beaches & Cafes 🌴",
// // // //         description: "Hidden gems of Bali, food, and nightlife.",
// // // //         videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // //         thumbnailUrl: "https://i.ytimg.com/vi/Scxs7L0vhZ4/hqdefault.jpg",
// // // //         channel: channels[1]._id,
// // // //         category: "Travel",
// // // //       },
// // // //       {
// // // //         title: "LoFi Beats to Relax & Study 🎵",
// // // //         description: "Soft LoFi tracks for late-night vibes.",
// // // //         videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // //         thumbnailUrl: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg",
// // // //         channel: channels[2]._id,
// // // //         category: "Music",
// // // //       },
// // // //       {
// // // //         title: "Top Bollywood Hits 2025 🎶",
// // // //         description: "Enjoy the trending Bollywood hits of the year.",
// // // //         videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // //         thumbnailUrl: "https://i.ytimg.com/vi/KQetemT1sWc/hqdefault.jpg",
// // // //         channel: channels[2]._id,
// // // //         category: "Music",
// // // //       },
// // // //       {
// // // //         title: "Messi vs Ronaldo – Who’s the GOAT? ⚽",
// // // //         description: "The ultimate football rivalry.",
// // // //         videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // //         thumbnailUrl: "https://i.ytimg.com/vi/kxopViU98Xo/hqdefault.jpg",
// // // //         channel: channels[3]._id,
// // // //         category: "Sports",
// // // //       },
// // // //       {
// // // //         title: "Cricket World Cup Final Highlights 🏏",
// // // //         description: "Best moments from the World Cup final.",
// // // //         videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // //         thumbnailUrl: "https://i.ytimg.com/vi/q6EoRBvdVPQ/hqdefault.jpg",
// // // //         channel: channels[3]._id,
// // // //         category: "Sports",
// // // //       },
// // // //       {
// // // //         title: "Top 10 Netflix Shows in 2025",
// // // //         description: "Best Netflix shows to binge this year.",
// // // //         videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // //         thumbnailUrl: "https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg",
// // // //         channel: channels[0]._id,
// // // //         category: "Movies",
// // // //       },
// // // //     ];

// // // //     await Video.insertMany(videos);

// // // //     console.log("✅ Database seeded with realistic videos & thumbnails!");
// // // //     process.exit();
// // // //   } catch (err) {
// // // //     console.error("Error seeding data:", err);
// // // //     process.exit(1);
// // // //   }
// // // // }

// // // // seed();


// // // // -----







// // // // ----------
// // // // -------
// // // const mongoose = require("mongoose");
// // // const Video = require("./models/Video");
// // // const Channel = require("./models/Channel");

// // // const MONGO_URI = "mongodb://127.0.0.1:27017/ytclone";

// // // async function seed() {
// // //   try {
// // //     await mongoose.connect(MONGO_URI);
// // //     console.log("MongoDB connected");

// // //     await Video.deleteMany({});
// // //     await Channel.deleteMany({});

// // //     const channels = await Channel.insertMany([
// // //       {
// // //         channelName: "Code with John",
// // //         description: "Programming tutorials and tech tips.",
// // //         owner: new mongoose.Types.ObjectId(),
// // //         banner: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
// // //       },
// // //       {
// // //         channelName: "Travel with Mia",
// // //         description: "Exploring the world, one place at a time.",
// // //         owner: new mongoose.Types.ObjectId(),
// // //         banner: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
// // //       },
// // //       {
// // //         channelName: "Chill Vibes",
// // //         description: "LoFi & relaxing beats.",
// // //         owner: new mongoose.Types.ObjectId(),
// // //         banner: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
// // //       },
// // //       {
// // //         channelName: "Sports Central",
// // //         description: "Highlights and analysis from sports.",
// // //         owner: new mongoose.Types.ObjectId(),
// // //         banner: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80",
// // //       },
// // //     ]);

// // //     const videos = [
// // //       {
// // //         title: "Learn React in 30 Minutes",
// // //         description: "Quick React tutorial for beginners.",
// // //         videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
// // //         thumbnailUrl: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
// // //         channel: channels[0]._id,
// // //         category: "Education",
// // //       },
// // //       {
// // //         title: "Node.js Crash Course",
// // //         description: "Everything you need to start with Node.js.",
// // //         videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4",
// // //         thumbnailUrl: "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg",
// // //         channel: channels[0]._id,
// // //         category: "Education",
// // //       },
// // //       {
// // //         title: "Exploring Bali – Beaches & Cafes 🌴",
// // //         description: "Hidden gems of Bali, food, and nightlife.",
// // //         videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4",
// // //         thumbnailUrl: "https://i.ytimg.com/vi/Scxs7L0vhZ4/hqdefault.jpg",
// // //         channel: channels[1]._id,
// // //         category: "Travel",
// // //       },
// // //       {
// // //         title: "LoFi Beats to Relax & Study 🎵",
// // //         description: "Soft LoFi tracks for late-night vibes.",
// // //         videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4",
// // //         thumbnailUrl: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg",
// // //         channel: channels[2]._id,
// // //         category: "Music",
// // //       },
// // //       {
// // //         title: "Top Bollywood Hits 2025 🎶",
// // //         description: "Enjoy the trending Bollywood hits of the year.",
// // //         videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4",
// // //         thumbnailUrl: "https://i.ytimg.com/vi/KQetemT1sWc/hqdefault.jpg",
// // //         channel: channels[2]._id,
// // //         category: "Music",
// // //       },
// // //       {
// // //         title: "Messi vs Ronaldo – Who’s the GOAT? ⚽",
// // //         description: "The ultimate football rivalry.",
// // //         videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_50mb.mp4",
// // //         thumbnailUrl: "https://i.ytimg.com/vi/kxopViU98Xo/hqdefault.jpg",
// // //         channel: channels[3]._id,
// // //         category: "Sports",
// // //       },
// // //       {
// // //         title: "Cricket World Cup Final Highlights 🏏",
// // //         description: "Best moments from the World Cup final.",
// // //         videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_70mb.mp4",
// // //         thumbnailUrl: "https://i.ytimg.com/vi/q6EoRBvdVPQ/hqdefault.jpg",
// // //         channel: channels[3]._id,
// // //         category: "Sports",
// // //       },
// // //       {
// // //         title: "Top 10 Netflix Shows in 2025",
// // //         description: "Best Netflix shows to binge this year.",
// // //         videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_100mb.mp4",
// // //         thumbnailUrl: "https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg",
// // //         channel: channels[0]._id,
// // //         category: "Movies",
// // //       },
// // //     ];

// // //     await Video.insertMany(videos);

// // //     console.log("✅ Database seeded with unique videos & thumbnails!");
// // //     process.exit();
// // //   } catch (err) {
// // //     console.error("Error seeding data:", err);
// // //     process.exit(1);
// // //   }
// // // }

// // // seed();
// // // // -----
// // // // ------








// // // 000000
// // const mongoose = require("mongoose");
// // const Video = require("./models/Video");
// // const Channel = require("./models/Channel");

// // const MONGO_URI = "mongodb://127.0.0.1:27017/ytclone";

// // async function seed() {
// //   try {
// //     await mongoose.connect(MONGO_URI);
// //     console.log("MongoDB connected");

// //     await Video.deleteMany({});
// //     await Channel.deleteMany({});

// //     const channels = await Channel.insertMany([
// //       {
// //         channelName: "Code with John",
// //         description: "Programming tutorials and tech tips.",
// //         owner: new mongoose.Types.ObjectId(),
// //         banner: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
// //       },
// //       {
// //         channelName: "Travel with Mia",
// //         description: "Exploring the world, one place at a time.",
// //         owner: new mongoose.Types.ObjectId(),
// //         banner: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
// //       },
// //       {
// //         channelName: "Chill Vibes",
// //         description: "LoFi & relaxing beats.",
// //         owner: new mongoose.Types.ObjectId(),
// //         banner: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
// //       },
// //       {
// //         channelName: "Sports Central",
// //         description: "Highlights and analysis from sports.",
// //         owner: new mongoose.Types.ObjectId(),
// //         banner: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80",
// //       },
// //     ]);

// //     const videos = [
// //       {
// //         title: "Learn React in 30 Minutes",
// //         description: "Quick React tutorial for beginners.",
// //         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
// //         thumbnailUrl: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
// //         channel: channels[0]._id,
// //         category: "Education",
// //       },
// //       {
// //         title: "Node.js Crash Course",
// //         description: "Everything you need to start with Node.js.",
// //         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
// //         thumbnailUrl: "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg",
// //         channel: channels[0]._id,
// //         category: "Education",
// //       },
// //       {
// //         title: "Exploring Bali – Beaches & Cafes 🌴",
// //         description: "Hidden gems of Bali, food, and nightlife.",
// //         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
// //         thumbnailUrl: "https://i.ytimg.com/vi/Scxs7L0vhZ4/hqdefault.jpg",
// //         channel: channels[1]._id,
// //         category: "Travel",
// //       },
// //       {
// //         title: "LoFi Beats to Relax & Study ",
// //         description: "Soft LoFi tracks for late-night vibes.",
// //         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
// //         thumbnailUrl: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg",
// //         channel: channels[2]._id,
// //         category: "Music",
// //       },
// //       {
// //         title: "Top Bollywood Hits 2025 🎶",
// //         description: "Enjoy the trending Bollywood hits of the year.",
// //         videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
// //         thumbnailUrl: "https://i.ytimg.com/vi/KQetemT1sWc/hqdefault.jpg",
// //         channel: channels[2]._id,
// //         category: "Music",
// //       },
// //       {
// //         title: "Messi vs Ronaldo – Who’s the GOAT? ⚽",
// //         description: "The ultimate football rivalry.",
// //         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
// //         thumbnailUrl: "https://i.ytimg.com/vi/kxopViU98Xo/hqdefault.jpg",
// //         channel: channels[3]._id,
// //         category: "Sports",
// //       },
// //       {
// //         title: "Cricket World Cup Final Highlights 🏏",
// //         description: "Best moments from the World Cup final.",
// //         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
// //         thumbnailUrl: "https://i.ytimg.com/vi/q6EoRBvdVPQ/hqdefault.jpg",
// //         channel: channels[3]._id,
// //         category: "Sports",
// //       },
// //       {
// //         title: "Top 10 Netflix Shows in 2025",
// //         description: "Best Netflix shows to binge this year.",
// //         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
// //         thumbnailUrl: "https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg",
// //         channel: channels[0]._id,
// //         category: "Movies",
// //       },
// //     ];

// //     await Video.insertMany(videos);

// //     console.log("✅ Database seeded with 8 realistic videos & working URLs!");
// //     process.exit();
// //   } catch (err) {
// //     console.error("Error seeding data:", err);
// //     process.exit(1);
// //   }
// // }

// // seed();

















// const mongoose = require("mongoose");
// const Video = require("./models/Video");
// const Channel = require("./models/Channel");

// const MONGO_URI = "mongodb://127.0.0.1:27017/ytclone";

// async function seed() {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("MongoDB connected");

//     await Video.deleteMany({});
//     await Channel.deleteMany({});

//     // Channels
//     const channels = await Channel.insertMany([
//       {
//         channelName: "Code with John",
//         description: "Programming tutorials and tech tips.",
//         owner: new mongoose.Types.ObjectId(),
//         banner:
//           "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
//       },
//       {
//         channelName: "Travel with Mia",
//         description: "Exploring the world, one place at a time.",
//         owner: new mongoose.Types.ObjectId(),
//         banner:
//           "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
//       },
//       {
//         channelName: "Chill Vibes",
//         description: "LoFi & relaxing beats.",
//         owner: new mongoose.Types.ObjectId(),
//         banner:
//           "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
//       },
//       {
//         channelName: "Sports Central",
//         description: "Highlights and analysis from sports.",
//         owner: new mongoose.Types.ObjectId(),
//         banner:
//           "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80",
//       },
//       {
//         channelName: "CineWorld",
//         description: "Movies, trailers & reviews.",
//         owner: new mongoose.Types.ObjectId(),
//         banner:
//           "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=1200&q=80",
//       },
//     ]);

//     // Videos (20 unique URLs & thumbnails)
//     const videos = [
//       {
//         title: "Learn React in 30 Minutes",
//         description: "Quick React tutorial for beginners.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
//         channel: channels[0]._id,
//         category: "Education",
//         views: 2400000,
//       },
//       {
//         title: "Node.js Crash Course",
//         description: "Everything you need to start with Node.js.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg",
//         channel: channels[0]._id,
//         category: "Education",
//         views: 1800000,
//       },
//       {
//         title: "Exploring Bali – Beaches & Cafes",
//         description: "Hidden gems of Bali, food, and nightlife.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/Scxs7L0vhZ4/hqdefault.jpg",
//         channel: channels[1]._id,
//         category: "Travel",
//         views: 3200000,
//       },
//       {
//         title: "LoFi Beats to Relax & Study",
//         description: "Soft LoFi tracks for late-night vibes.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg",
//         channel: channels[2]._id,
//         category: "Music",
//         views: 8500000,
//       },
//       {
//         title: "Top Bollywood Hits 2025",
//         description: "Enjoy the trending Bollywood hits of the year.",
//         videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/KQetemT1sWc/hqdefault.jpg",
//         channel: channels[2]._id,
//         category: "Music",
//         views: 5600000,
//       },
//       {
//         title: "Messi vs Ronaldo – Who’s the GOAT?",
//         description: "The ultimate football rivalry.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/kxopViU98Xo/hqdefault.jpg",
//         channel: channels[3]._id,
//         category: "Sports",
//         views: 9100000,
//       },
//       {
//         title: "Cricket World Cup Final Highlights",
//         description: "Best moments from the World Cup final.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/q6EoRBvdVPQ/hqdefault.jpg",
//         channel: channels[3]._id,
//         category: "Sports",
//         views: 7500000,
//       },
//       {
//         title: "Top 10 Netflix Shows in 2025",
//         description: "Best Netflix shows to binge this year.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg",
//         channel: channels[4]._id,
//         category: "Movies",
//         views: 4000000,
//       },
//       {
//         title: "JavaScript Async Await Explained",
//         description: "Master async programming in JS.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/V_Kr9OSfDeU/hqdefault.jpg",
//         channel: channels[0]._id,
//         category: "Education",
//         views: 1200000,
//       },
//       {
//         title: "Paris Vlog – Eiffel Tower & More",
//         description: "Exploring the beauty of Paris.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/EVhRdmI0bFU/hqdefault.jpg",
//         channel: channels[1]._id,
//         category: "Travel",
//         views: 2800000,
//       },
//       {
//         title: "Morning Jazz",
//         description: "Smooth jazz tracks for a perfect morning.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/DWcJFNfaw9c/hqdefault.jpg",
//         channel: channels[2]._id,
//         category: "Music",
//         views: 6700000,
//       },
//       {
//         title: "IPL 2025 Final – Full Highlights",
//         description: "Unforgettable cricket final moments.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/5WrfYVv-vGQ/hqdefault.jpg",
//         channel: channels[3]._id,
//         category: "Sports",
//         views: 9500000,
//       },
//       {
//         title: "Avengers: Secret Wars – Official Trailer",
//         description: "The most awaited Marvel movie.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg",
//         channel: channels[4]._id,
//         category: "Movies",
//         views: 12000000,
//       },
//       {
//         title: "Learn MongoDB in 20 Minutes",
//         description: "Crash course for beginners.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/CB8JPjg_3cM/hqdefault.jpg",
//         channel: channels[0]._id,
//         category: "Education",
//         views: 1100000,
//       },
//       {
//         title: "Tokyo Travel Guide 2025",
//         description: "Discover Tokyo's best spots.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/QdBZY2fkU-0/hqdefault.jpg",
//         channel: channels[1]._id,
//         category: "Travel",
//         views: 3100000,
//       },
//       {
//         title: "Best of Arijit Singh",
//         description: "Romantic and soulful songs.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
//         channel: channels[2]._id,
//         category: "Music",
//         views: 8700000,
//       },
//       {
//         title: "UEFA Champions League Final 2025",
//         description: "All the epic football action.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/q6EoRBvdVPQ/hqdefault.jpg",
//         channel: channels[3]._id,
//         category: "Sports",
//         views: 10300000,
//       },
//       {
//         title: "Oscar Winning Movies of 2025",
//         description: "Top Oscar winners this year.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg",
//         channel: channels[4]._id,
//         category: "Movies",
//         views: 6400000,
//       },
//       {
//         title: "Python for Beginners",
//         description: "Start coding in Python today!",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg",
//         channel: channels[0]._id,
//         category: "Education",
//         views: 4300000,
//       },
//       {
//         title: "Maldives Vacation Guide ",
//         description: "All about the Maldives experience.",
//         videoUrl:
//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
//         thumbnailUrl: "https://i.ytimg.com/vi/1bHdzTUNw-4/hqdefault.jpg",
//         channel: channels[1]._id,
//         category: "Travel",
//         views: 3900000,
//       },
//     ];

//     await Video.insertMany(videos);

//     console.log("✅ Database seeded with 20 realistic videos & unique URLs!");
//     process.exit();
//   } catch (err) {
//     console.error("Error seeding data:", err);
//     process.exit(1);
//   }
// }

// seed();
























const mongoose = require("mongoose");
const Video = require("./models/Video");
const Channel = require("./models/Channel");

const MONGO_URI = "mongodb://127.0.0.1:27017/ytclone";

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    await Video.deleteMany({});
    await Channel.deleteMany({});

    // Channels
    const channels = await Channel.insertMany([
      {
        channelName: "Code with John",
        description: "Programming tutorials and tech tips.",
        owner: new mongoose.Types.ObjectId(),
        banner:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      },
      {
        channelName: "Travel with Mia",
        description: "Exploring the world, one place at a time.",
        owner: new mongoose.Types.ObjectId(),
        banner:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      },
      {
        channelName: "Chill Vibes",
        description: "LoFi & relaxing beats.",
        owner: new mongoose.Types.ObjectId(),
        banner:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
      },
      {
        channelName: "Sports Central",
        description: "Highlights and analysis from sports.",
        owner: new mongoose.Types.ObjectId(),
        banner:
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80",
      },
      {
        channelName: "CineWorld",
        description: "Movies, trailers & reviews.",
        owner: new mongoose.Types.ObjectId(),
        banner:
          "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=1200&q=80",
      },
    ]);

    // Videos (20 unique URLs & thumbnails)
    const videos = [
      {
        title: "Learn React in 30 Minutes",
        description: "Quick React tutorial for beginners.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
        channel: channels[0]._id,
        category: "Education",
        views: 2400000,
      },
      {
        title: "Node.js Crash Course",
        description: "Everything you need to start with Node.js.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg",
        channel: channels[0]._id,
        category: "Education",
        views: 1800000,
      },
      {
        title: "Exploring Bali – Beaches & Cafes",
        description: "Hidden gems of Bali, food, and nightlife.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/Scxs7L0vhZ4/hqdefault.jpg",
        channel: channels[1]._id,
        category: "Travel",
        views: 3200000,
      },
      {
        title: "LoFi Beats to Relax & Study",
        description: "Soft LoFi tracks for late-night vibes.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg",
        channel: channels[2]._id,
        category: "Music",
        views: 8500000,
      },
      {
        title: "Top Bollywood Hits 2025",
        description: "Enjoy the trending Bollywood hits of the year.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/KQetemT1sWc/hqdefault.jpg",
        channel: channels[2]._id,
        category: "Music",
        views: 5600000,
      },
      {
        title: "Messi vs Ronaldo – Who’s the GOAT?",
        description: "The ultimate football rivalry.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/kxopViU98Xo/hqdefault.jpg",
        channel: channels[3]._id,
        category: "Sports",
        views: 9100000,
      },
      {
        title: "Cricket World Cup Final Highlights",
        description: "Best moments from the World Cup final.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/q6EoRBvdVPQ/hqdefault.jpg",
        channel: channels[3]._id,
        category: "Sports",
        views: 7500000,
      },
      {
        title: "Top 10 Netflix Shows in 2025",
        description: "Best Netflix shows to binge this year.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg",
        channel: channels[4]._id,
        category: "Movies",
        views: 4000000,
      },
      {
        title: "JavaScript Async Await Explained",
        description: "Master async programming in JS.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/V_Kr9OSfDeU/hqdefault.jpg",
        channel: channels[0]._id,
        category: "Education",
        views: 1200000,
      },
      {
        title: "Paris Vlog – Eiffel Tower & More",
        description: "Exploring the beauty of Paris.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
        channel: channels[1]._id,
        category: "Travel",
        views: 2800000,
      },
      {
        title: "Morning Jazz",
        description: "Smooth jazz tracks for a perfect morning.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/DWcJFNfaw9c/hqdefault.jpg",
        channel: channels[2]._id,
        category: "Music",
        views: 6700000,
      },
      {
        title: "IPL 2025 Final – Full Highlights",
        description: "Unforgettable cricket final moments.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=800&q=80",
        channel: channels[3]._id,
        category: "Sports",
        views: 9500000,
      },
      {
        title: "Avengers: Secret Wars – Official Trailer",
        description: "The most awaited Marvel movie.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg",
        channel: channels[4]._id,
        category: "Movies",
        views: 12000000,
      },
      {
        title: "Learn MongoDB in 20 Minutes",
        description: "Crash course for beginners.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/CB8JPjg_3cM/hqdefault.jpg",
        channel: channels[0]._id,
        category: "Education",
        views: 1100000,
      },
      {
        title: "Tokyo Travel Guide 2025",
        description: "Discover Tokyo's best spots.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/QdBZY2fkU-0/hqdefault.jpg",
        channel: channels[1]._id,
        category: "Travel",
        views: 3100000,
      },
      {
        title: "Best of Arijit Singh",
        description: "Romantic and soulful songs.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        channel: channels[2]._id,
        category: "Music",
        views: 8700000,
      },
      {
        title: "UEFA Champions League Final 2025",
        description: "All the epic football action.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/q6EoRBvdVPQ/hqdefault.jpg",
        channel: channels[3]._id,
        category: "Sports",
        views: 10300000,
      },
      {
        title: "Oscar Winning Movies of 2025",
        description: "Top Oscar winners this year.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg",
        channel: channels[4]._id,
        category: "Movies",
        views: 6400000,
      },
      {
        title: "Python for Beginners",
        description: "Start coding in Python today!",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg",
        channel: channels[0]._id,
        category: "Education",
        views: 4300000,
      },
      {
        title: "Maldives Vacation Guide",
        description: "All about the Maldives experience.",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/1bHdzTUNw-4/hqdefault.jpg",
        channel: channels[1]._id,
        category: "Travel",
        views: 3900000,
      },
    ];

    await Video.insertMany(videos);

    console.log("✅ Database seeded with 20 realistic videos & unique URLs!");
    process.exit();
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
}

seed();












