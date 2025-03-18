import { BreadCrumb } from 'primereact/breadcrumb';
import { baseUrlFrontend } from '../utils/BasePath';

const Crump = ({ items }: any) => {
  const home = { icon: 'pi pi-home', url: `${baseUrlFrontend}` };
  return (
    <div>
      <BreadCrumb model={items} home={home} />
    </div>
  );
};

export default Crump;
