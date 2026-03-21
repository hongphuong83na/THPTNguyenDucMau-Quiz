import React from 'react';

export const DashboardLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-4">{title}</h1>
    {children}
  </div>
);
