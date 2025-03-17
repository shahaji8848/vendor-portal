import ListingPage from './ListingPage';
import { Link } from 'react-router-dom';
import Crump from '../../BreadCrump/Crump';
import { baseUrlFrontend } from '../../utils/BasePath';
import HomePageCards from '../../cards/HomePageCards';
const Home = () => {
  // const [show, setShow] = useState(false);

  // const dataForForm = {
  //   deviceType: null,
  //   deviceName: null,
  //   deviceCost: null,
  //   gst: null,
  //   roi: null,
  //   costOfFundsOperating: null,
  //   accDepreciationRate: null,
  //   taxDepreciationRate: null,
  //   residualValueOfAsset: null,
  //   otherExpenses: null,
  //   creditCost: null,
  //   taxRate: null,
  //   borrowings: null,
  //   equity: null,
  // };
  const items = [
    {
      label: 'Home',
    },
    {
      label: 'Lease Calculator',
      template: () => (
        <Link to={`${baseUrlFrontend}`}>
          <a className="text-primary font-semibold">Lease Calculator</a>
        </Link>
      ),
    },
  ];

  const dataForHomepageCard = [
    {
      title: 'Assign To me',
      count: '05',
      link: '/',
    },
  ];

  return (
    <div className="">
      <div>
        <Crump items={items} />
   
        <HomePageCards data={dataForHomepageCard} />
      </div>
      <div className="py-3">
        
      </div>
    </div>
  );
};

export default Home;
