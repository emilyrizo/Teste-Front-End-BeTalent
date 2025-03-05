import React, { useState } from 'react';
import { formatDate } from '../../utils/formatDate';
import { formatPhone } from '../../utils/formatPhone';
import { User } from '../../types/User';
import arrow from "../../assets/images/arrow.svg";
import './Table.css';

interface TableProps {
  users: User[];
}

const Table: React.FC<TableProps> = ({ users }) => {
  const [expandedUserId, setExpandedUserId] = useState<number | null>(null);

  const toggleExpansion = (userId: number) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  return (
    <div className="table-container">
      <table className="desktop-table">
        <thead>
          <tr>
            <th className="col-photo">FOTO</th>
            <th className="col-name">NOME</th>
            <th className="col-job">CARGO</th>
            <th className="col-admission">DATA DE ADMISSÃO</th>
            <th className="col-phone">TELEFONE</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="col-photo">
                <img src={user.image} alt={user.name} className="user-image" />
              </td>
              <td className="col-name">{user.name}</td>
              <td className="col-job">{user.job}</td>
              <td className="col-admission">{formatDate(user.admission_date)}</td>
              <td className="col-phone">{formatPhone(user.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mobile-view">
        <div className="mobile-header">
          <div className="mobile-header-title">
            <span className="header-photo">FOTO</span>
            <span className="header-name">NOME</span>
          </div>
          <span className="header-icon">•</span>
        </div>
        {users.map(user => (
          <React.Fragment key={user.id}>
            <div
              className={`user-header ${expandedUserId === user.id ? 'expanded' : ''}`}
              onClick={() => toggleExpansion(user.id)}
              role="button"
              tabIndex={0}
            >
              <div className="user-info">
                <img src={user.image} alt={user.name} className="user-image" />
                <span className="user-name">{user.name}</span>
              </div>
              <img
                src={arrow}
                alt="Expandir/Recolher"
                className={`expand-icon ${expandedUserId === user.id ? 'rotated' : ''}`}
              />
            </div>
            {expandedUserId === user.id && (
              <div className="user-details">
                <div className="detail-item">
                  <span className="label">Cargo</span> 
                  <span className="value">{user.job}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Data de Admissão</span> 
                  <span className="value">{formatDate(user.admission_date)}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Telefone</span> 
                  <span className="value">{formatPhone(user.phone)}</span>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Table;