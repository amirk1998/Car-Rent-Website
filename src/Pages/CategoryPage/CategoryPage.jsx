import CarProvider from '../../Provider/CarProvider';
import { useState } from 'react';
import SideBar from '../../Components/SideBar/SideBar';

const CategoryPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ];
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <CarProvider>
        <h1>Category Page</h1>
        <SideBar
          categories={categories}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </CarProvider>
    </div>
  );
};

export default CategoryPage;
