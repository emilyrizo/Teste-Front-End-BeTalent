import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../services/api';
import Table from '../components/Table/Table';
import Search from '../components/Search/Search';
import Navbar from '../components/Navbar/Navbar';import { User } from '../types/User';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
      setFilteredUsers(data);
    });
  }, []);

  const handleSearch = (query: string) => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.job.toLowerCase().includes(query.toLowerCase()) ||
      user.phone.includes(query)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="content-container">
        <Search onSearch={handleSearch} />
        <Table users={filteredUsers} />
      </div>
    </div>
  );
};

export default Home;