import { Link, Outlet } from "react-router-dom";

export default function Friends() {
  const friends = ["Chris", "Anna", "Bob"];

  return (
    <section className="container">
      <h1>Friends page</h1>
      <main className="friends-wrapper">
        <ul className="friends-list">
          {friends.map((person) => (
            <li>
              <Link to={`/friends/${person}`}>{person}</Link>
            </li>
          ))}
        </ul>
        <div className="chosen-friend">
          <Outlet />
        </div>
      </main>
    </section>
  );
}
