// =====================================================
// TASK 1: Fetch User Profile
// =====================================================

function fetchGitHubUser(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then(function (response) {
      if (response.ok === false) {
        return Promise.reject("User not found");
      }

      return response.json();
    });
}

// =====================================================
// TASK 2: Fetch Repositories
// =====================================================

function fetchRepos(user) {
  return fetch(`https://api.github.com/users/${user.login}/repos`)
    .then(function (response) {
      if (response.ok === false) {
        return Promise.reject("Failed to fetch repos");
      }

      return response.json();
    });
}

// =====================================================
// TASK 3: Fetch Repository Languages
// =====================================================

function fetchRepoLanguages(repo) {
  return fetch(repo.languages_url)
    .then(function (response) {
      if (response.ok === false) {
        return Promise.reject("Failed to fetch languages");
      }

      return response.json();
    })
    .catch(function (error) {
      console.log(`Failed to fetch languages for ${repo.name}`);
      console.log(error);
      return {};
    });
}

// =====================================================
// TASK 4: Aggregate Results
// =====================================================

fetchGitHubUser("wrong_user_name_123456")
  .then(function (user) {
    console.log("TASK 5 - User fetched:");
    console.log(user.login);

    return fetchRepos(user);
  })
  .then(function (repos) {
    console.log("TASK 5 - Repos fetched:");
    console.log(repos.length);

    var firstFiveRepos = repos.slice(0, 5);

    var languagePromises = firstFiveRepos.map(function (repo) {
      return fetchRepoLanguages(repo).then(function (languages) {
        return {
          name: repo.name,
          languages: languages
        };
      });
    });

    return Promise.all(languagePromises);
  })
  .then(function (result) {
    console.log("TASK 5 SUCCESS");
    console.log(result);
  })
  .catch(function (error) {
    console.log("TASK 5 ERROR HANDLED");
    console.log(error);
  });

// =====================================================
// TASK 5: Error Handling
// =====================================================

fetchGitHubUser("octocat")
  .then(function (user) {
    console.log("TASK 5 - User fetched successfully");
    console.log(user.login);

    return fetchRepos(user);
  })
  .then(function (repos) {
    console.log("TASK 5 - Repos fetched successfully");

    var firstFiveRepos = repos.slice(0, 5);

    var promises = firstFiveRepos.map(function (repo) {
      return fetchRepoLanguages(repo)
        .then(function (languages) {
          console.log("TASK 5 - Languages fetched for:");
          console.log(repo.name);

          return {
            name: repo.name,
            languages: languages
          };
        })
        .catch(function (error) {
          console.log(`Failed to fetch languages for ${repo.name}`);
          console.log(error);

          return {
            name: repo.name,
            languages: {}
          };
        });
    });

    return Promise.all(promises);
  })
  .then(function (result) {
    console.log("TASK 5 SUCCESS");
    console.log(result);
  })
  .catch(function (error) {
    console.log("TASK 5 ERROR");
    console.log(error);
  });


// =====================================================
// TASK 6: Finally Cleanup
// =====================================================

fetchGitHubUser("octocat")
  .then(function (user) {
    console.log("TASK 6 - User fetched");
    console.log(user.login);

    return fetchRepos(user);
  })
  .then(function (repos) {
    console.log("TASK 6 - Repos fetched");
    console.log(repos.length);
  })
  .catch(function (error) {
    console.log("TASK 6 ERROR");
    console.log(error);
  })
  .finally(function () {
    console.log("GitHub Explorer operation complete");
  });


