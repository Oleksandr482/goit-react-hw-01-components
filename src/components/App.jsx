import { Profile } from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from 'components/user.json'
import data from 'components/data.json'
import friends from 'components/friends.json'
import transactions from 'components/transactions.json'

export const App = () => {
    // const {username, tag, location, avatar, stats } = {user};
  return (
      <div>
          <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              followers={user.stats.followers}
              views={user.stats.views}
              likes={user.stats.likes}
          />
          <Statistics title="Upload stats" stats={data} />
          <FriendList friends={friends} />
          <TransactionHistory items={transactions} />
      </div>
      
  );
};