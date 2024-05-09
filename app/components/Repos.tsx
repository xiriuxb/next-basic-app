async function fetchRepos(user: string) {
  const res = await fetch(`https://api.github.com/users/${user}/repos`, {
    next: {
      revalidate: 60,
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const json = await res.json();
  return json;
}

const Repos = async ({ user }: { user: string }) => {
  const repos = await fetchRepos(user);
  return (
    <div>
      <h1>{user}'s Repos</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Repo Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo: any) => (
              <tr>
                <td>{repo.name}</td>
                <td>{repo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Repos;
