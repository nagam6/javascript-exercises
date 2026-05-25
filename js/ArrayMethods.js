const users = [
  { id: 1, username: "dania", followers: 1200, verified: true },
  { id: 2, username: "omar", followers: 350, verified: false },
  { id: 3, username: "luna", followers: 2400, verified: true },
  { id: 4, username: "zain", followers: 90, verified: false },
  { id: 5, username: "maya", followers: 800, verified: true },
];

const posts = [
  {
    id: 1,
    userId: 1,
    title: "Why JavaScript is Weird",
    content: "JavaScript has strange but interesting behavior.",
    likes: 1500,
    category: "Programming",
  },

  {
    id: 2,
    userId: 3,
    title: "Best Gaming Setup",
    content: "Today I will show my gaming room.",
    likes: 2200,
    category: "Gaming",
  },

  {
    id: 3,
    userId: 1,
    title: "React Tips",
    content: "Use components to organize your UI.",
    likes: 900,
    category: "Programming",
  },

  {
    id: 4,
    userId: 5,
    title: "Morning Routine",
    content: "Small habits can change your day.",
    likes: 700,
    category: "Lifestyle",
  },
];

// TASK 1 — Create User Cards

const userCards = users.map(user => {

  let status = user.followers >= 500 ? "Active User" : "New User";

  return `@${user.username} - ${user.followers} followers - ${status}`;
});


// TASK 2 — Find Viral Posts

const viralPosts = posts.filter(post =>
  post.likes > 1000
);


// TASK 3 — Find Most Popular User

const mostPopularUser = users.reduce((highestUser, currentUser) => {
  if (currentUser.followers > highestUser.followers) {
    return currentUser;
  }
  return highestUser;
});


// TASK 4 — Find Inactive Users

const inactiveUsers = users.filter(user => {
  const hasPost = posts.some(post => {
    return post.userId === user.id;
  });
  return !hasPost;
});

// TASK 5 — Calculate Total Likes

const totalLikes = posts.reduce((total, post) =>
  total + post.likes
, 0);


// TASK 6 — Check If There Is Verified User

const hasVerifiedUser = users.some(user =>
  user.verified === true
);


// TASK 7 — Check Platform Quality

const allPostsValid = posts.every(post =>
  post.title && post.content
);


// TASK 8 — Create Trending Titles

const trendingTitles = posts.map(post =>
  post.title.toUpperCase()
);


// TASK 9 — Create Gaming Feed

const gamingFeed = posts.filter(post =>
  post.category === "Gaming"
);


// TASK 10 — Sort Users By Followers

const sortedUsers = [...users].sort((a, b) =>
  b.followers - a.followers
);


// TASK 11 — Find User By Username

const searchedUsername = "dania";

const foundUser = users.find(user =>
  user.username === searchedUsername
);

// TASK 12 — Create Platform Statistics

const totalUsers = users.length;
const totalPosts = posts.length;

const totalLikes = posts.reduce((total, post) => {
  return total + post.likes;
}, 0);

const averageLikesPerPost = totalLikes / totalPosts;

const categoryCounts = posts.reduce((counts, post) => {

  // If category already exists
  if (counts[post.category]) {
    counts[post.category]++;
  }
  // First time category appears
  else {
    counts[post.category] = 1;
  }
  return counts;
}, {});

const mostPopularCategory = Object.keys(categoryCounts).reduce(
  (mostPopular, currentCategory) => {
    if (
      categoryCounts[currentCategory] >
      categoryCounts[mostPopular]
    ) {
      return currentCategory;
    }
    return mostPopular;
  }
);

const platformStatistics = {
  totalUsers: totalUsers,
  totalPosts: totalPosts,
  totalLikes: totalLikes,
  averageLikesPerPost: averageLikesPerPost,
  mostPopularCategory: mostPopularCategory,
};

console.log(platformStatistics);
