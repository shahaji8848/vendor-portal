import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrlFrontend } from '../utils/BasePath';

interface data {
  // id: number;
  title: string;
  count: number | string;
  // time: number | string;
  // since: string;
  // icon: string;

  link: string | null;
  // status?: string;
}

interface HomePageCardsProps {
  data: data[];
}

const HomePageCards: React.FC<HomePageCardsProps> = ({ data }) => {
  console.log(data, 'data ta atttatat');
  return (
    <div className="grid h-100">
      {data?.map((item, index) => (
        <Link
          to={
            '#'
            // item.link
            //   ? `${baseUrlFrontend}/sales/invoice-approval-note/status/type=${item.link}&status=${item.status}`
            //   : ""
          }
          // className={`col-12 lg:col-6 xl:col-3 ${item?.link ? 'cursor-pointer' : ''}`}
          className={`col-3 ${item?.link ? 'cursor-pointer' : ''}`}
          key={index}
        >
          <div className="card mb-0 ">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">{item?.title}</span>
                <div className="text-900 font-medium text-xl">{item?.count || 0}</div>
              </div>
              {/* {item?.icon ? (
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: '2.5rem', height: '2.5rem' }}
                >
                  <i className={item?.icon ? `pi ${item?.icon} text-xl` : ''} />
                </div>
              ) : (
                ''
              )} */}
            </div>
            {/* <span className="text-green-500 font-medium">{item?.time} </span>
            <span className="text-500">{item?.since}</span> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePageCards;
