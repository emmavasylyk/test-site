export const getClients = state => state.clients.items;

export const getVisibleClient = state => {
  const clients = getClients(state);
  return clients;
};
