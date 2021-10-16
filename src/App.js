import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'

import PostList from './components/posts/PostList'
import PostCreate from './components/posts/PostCreate'
import PostEdit from './components/posts/PostEdit'

import UserList from './components/users/UserList'
import UserCreate from './components/users/UserCreate'
import UserEdit from './components/users/UserEdit'

function App() {
  return (
    <div className="App">
      <Admin dataProvider={restProvider('http://localhost:3000')} >
        <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} />
        <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} />
      </Admin>
    </div>
  );
}

export default App;
