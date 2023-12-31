import React from 'react';

function UserData() {
  return (
    <div className="flex flex-col items-center border p-4 rounded-md bg-gray-100 shadow m-2">
      <h2 className="text-lg font-semibold mb-2">Username&apos;s profile</h2>
      <div className="flex w-full max-w-md bg-white p-4 rounded-lg shadow mb-4">
        <div className="flex-1">
          <div className="font-bold mb-1">Info</div>
          <div className="text-sm">
            <p>Recipes: 0</p>
            <p>Favorites: 0</p>
            <p>Last Recipe: None</p>
            <p>Battle Wins: 0</p>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-md bg-white p-4 rounded-lg shadow">
        <div className="flex-shrink-0">
          <div className="font-bold mb-1">Badges</div>
        </div>
      </div>
    </div>
  );
}

export default UserData;