import React, { useEffect, useState } from 'react';
import { db } from "../../firebase";
import "../../css/Tables.css";
import { collection, getDocs } from 'firebase/firestore';

const Tables = () => {
  const [tables, setTables] = useState([]);
  //function for handle reserve where on click tableID added to corresponding reservation data
  const handleReserve = ()=>{
    
  }

  // function for fetch table details from firebase
  useEffect(() => {
    const fetchTables = async () => {
      try {
        // create reference for tables collection
        const tablesRef = collection(db,"tables");
        // get all documents in the tables collection
        const tableData = await getDocs( tablesRef );
        // create an array of tables using table documents 
        const tablesArray = tableData.docs.map((doc) => {
          const data = doc.data();
          return {
            tableId: doc.id,
            tableName: data.tableName,
            availability: data.availability,
          };
        });
        setTables(tablesArray);
      } 
      catch (error) {
        console.error('Error fetching tables:', error);
      }
    };

    fetchTables();
  }, []);

  return (
    // HTML for display tables page where available tables and unavailable tables shown in different colour buttons
    <div className="tables_page">
      <h1 className='tables_heading'> Available Tables: Reserve Now! </h1>
      <p className='tables_content'> Discover our available tables below! Tables marked in green are the ones you can reserve in advance</p>
      <div className="table_buttonsContainer">
        {tables.map((table) => (
          <button
            key={table.tableId}
            className={table.availability ? 'table_available' : 'table_unavailable'}
            onClick={handleReserve}
          >
            {table.tableName}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default Tables;
