const STORAGE_KEY = "installedApps";

export const getInstalledApps = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const installApp = (app) => {
  const installed = getInstalledApps();
  const alreadyInstalled = installed.some((a) => a.id === app.id);
  if (alreadyInstalled) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...installed, app]));
};

export const uninstallApp = (appId) => {
  const installed = getInstalledApps();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(installed.filter((a) => a.id !== appId)),
  );
};

export const isAppInstalled = (appId) => {
  return getInstalledApps().some((a) => a.id === appId);
};
