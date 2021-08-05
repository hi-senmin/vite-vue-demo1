import server from '../../utils/server';

export const getUsrInfo2 = async (params: object, config: any) => {
  return server({
    url: '/users/hi-senmin',
    method: 'get',
    params: {
      params
    },
    ...config
  });
};

export const getUsrInfo = async (params: object, config: any) => {
  return server({
    url: '/users/hi-senmin',
    method: 'get',
    params,

    ...config
  });
};
