import Crump from '../../BreadCrump/Crump';
import HomePageCards from '../../cards/HomePageCards';
import TreeTableComponent from '../../tables/TreeTableComponent';
const RFQList = () => {
  const items = [
    {
      label: 'Dashboards',
    },
    {
      label: 'MY RFQ',
      // template: () => (
      //   <Link to={`${baseUrlFrontend}`}>
      //     <a className="text-primary font-semibold">Lease Calculator</a>
      //   </Link>
      // ),
    },
  ];

  const dataForHomepageCard = [
    {
      title: 'Assign To me',
      count: '05',
      link: '/',
    },
    {
      title: 'In Progress',
      count: '05',
      link: '/',
    },
    {
      title: 'Won by me',
      count: '03',
      link: '/',
    },
    {
      title: 'Lost/Not Participated',
      count: '05',
      link: '/',
    },
  ];

  return (
    <div className="">
      <div>
        <Crump items={items} />
        <div className="mt-3">
          <HomePageCards data={dataForHomepageCard} />
        </div>
        <div className="mt-3">
          <TreeTableComponent />
        </div>
      </div>
      <div className="py-3"></div>
    </div>
  );
};

export default RFQList;
