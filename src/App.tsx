import * as React from 'react';
import { useParams } from 'react-router';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { Home, NoMatch } from './utils';

export default function App() {
  return (
    <div>
      <h1>Nested</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="people" element={<PeopleLayout />}>
            <Route index element={<ListPeople />} />

            {/* <Route path=":name" element={<PersonLayout />}>
              <Route index element={<Person />} />
            </Route> */}

            <Route path=":name" element={<PersonCoordinator />} />
            <Route path="" />
          </Route>

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function PersonCoordinator() {
  return (
    <Routes>
      <Route index element={<Person />} />
      <Route path="edit" element={<div>Hello, my name Jeff.</div>} />
    </Routes>
  );
}

function EditPerson() {
  const params = useParams();
  return <div>Editing {params.name}</div>;
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/people/murray">Murray</Link>
          </li>

          <li>
            <Link to="/people/murray/edit">Edit Murray</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function PeopleLayout() {
  return (
    <div id="people-coord">
      <Outlet />
    </div>
  );
}

function PersonLayout() {
  return (
    <div id="person-coord">
      <Outlet />
    </div>
  );
}

function ListPeople() {
  return (
    <div>
      Jake <br />
      Linda <br />
      Murray <br />
    </div>
  );
}

function Person() {
  const params = useParams();
  return <div> Hey there {params.name}</div>;
}
