import React, { useState, useEffect } from 'react';
import './Reports.css';
import axios from 'axios';

export const Reports = () => {
  const [activeBar, setActiveBar] = useState("Pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [reports, setReports] = useState({
    pending: [], 
    completed: []
  });

  // Fetch data for pending and completed reports
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:8000/patient/post'); 
        const pendingData = response.data.data.filter(report => report.status === 'Pending');
        const completedData = response.data.data.filter(report => report.status === 'Completed');

        setReports({
          pending: pendingData,
          completed: completedData
        });
      } catch (error) {
        console.error('Error fetching reports:', error);

        // Mock data in case of API failure
        setReports({
          pending: [
            { id: 1, name: 'aditya joshi', dob: '24-02-2004', status: 'Pending' },
            { id: 2, name: 'aridaman singh', dob: '08-10-2024', status: 'Pending' }
          ],
          completed: [
            { id: 3, name: 'amit singh', dob: '1975-12-15', status: 'Completed' },
            { id: 4, name: 'abhay pandey', dob: '1965-08-30', status: 'Completed' }
          ]
        });
      }
    };

    fetchReports();
  }, []);

  // Filter reports by search query
  const filteredReports = reports[activeBar.toLowerCase()].filter(report =>
    report.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='reprt'>
      <div className='workreport'>
        {/* Search Bar */}
        <div className='search-bar'>
          <input 
            type="text" 
            placeholder="Search reports..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <i className="fas fa-search"></i>
        </div>

        {/* Toggle between Pending and Completed Reports */}
        <div className='reportchat'>
          <div 
            className={`statusTitle ${activeBar === 'Pending' ? 'activereportchat' : ''}`} 
            onClick={() => setActiveBar("Pending")}
          >
            Pending
          </div>
          <div 
            className={`statusTitle ${activeBar === 'Completed' ? 'activereportchat' : ''}`} 
            onClick={() => setActiveBar("Completed")}
          >
            Completed
          </div>
        </div>

        {/* Display Filtered Reports */}
        {filteredReports.length > 0 ? (
          filteredReports.map((report) => (
            <div key={report.id} className='reportlist'>
              <div className="ststusrowlist">
                <div className='statusname'>{report.name}</div>
                <div className='statusdetail'>
                  <div className='statusdrdate'>{new Date(report.dob).toLocaleDateString()}</div> {/* Displaying DOB */}
                  <div className='ststusbtn'>
                    <button>x</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-reports">No reports found</div>
        )}
      </div>
    </div>
  );
}
