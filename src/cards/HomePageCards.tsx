import React from 'react';

interface Data {
  title: string;
  count: number | string;
  link: string | null;
}

interface HomePageCardsProps {
  data: Data[];
}

const HomePageCards: React.FC<HomePageCardsProps> = ({ data }) => {
  return (
    <div className="grid">
      {data.map((item, index) => (
        <div key={index} className="col-12 lg:col-6 xl:col-3">
          <div className="card mb-0 p-3">
            <div className="flex justify-content-between">
              <div>
                <span className="block text-800 font-medium mb-3">{item.title}</span>
                <div className="text-900 text-4xl font-medium">{item.count}</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-blue-100 border-round"
                style={{ width: '2.5rem', height: '2.5rem' }}
              >
                <i className="pi pi-bars text-blue-500 text-xl" />
              </div>
            </div>
            {/* {item.link && (
              <Link to={item.link} className="text-blue-500">
                View Details
              </Link>
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePageCards;
