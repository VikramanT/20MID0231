import React, { useState } from 'react';

const CompanySelect = () => {
  const companies = ["AMZ", "FLP", "SNP", "HYN", "AZO"];

  const [selectedCompany, setSelectedCompany] = useState('');

  const handleChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  return (
    <div>
      <label htmlFor="company-select">Select Company:</label>
      <select id="company-select" value={selectedCompany} onChange={handleChange}>
        {companies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CompanySelect;
