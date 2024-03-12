import { userAtom } from '@/atoms/users.atom';
import DashboardLayout from '@/layouts/DashboardLayout';
import { useAtom } from 'jotai';

const Dashboard = () => {
  const [currentUser, setUser] = useAtom(userAtom);

  return (
    <DashboardLayout>
      <div className='p-8'>
        <pre className='whitespace-pre-line p-4 bg-accent'>
          {JSON.stringify(currentUser)}
        </pre>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
