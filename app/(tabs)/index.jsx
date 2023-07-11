import { useRouter } from 'expo-router';
import { Structure, Welcome } from '../../components';

export default function Home() {
  const router = useRouter()
  return (
    <Structure>
      <Welcome />
    </Structure>
  );
}
