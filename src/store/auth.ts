import { createEffect, createStore } from 'effector';
import { updateSocket } from './chat';

export const fetchGendersFx = createEffect(async () => {
  const res = await fetch('http://109.194.37.212:93/api/auth');
  return res.json();
});
export const $genders = createStore({ genders: [] }).on(
  fetchGendersFx.done,
  (
    state,
    payload: {
      params: void;
      result: { genders: [] };
    },
  ) => payload.result,
);

export const loginFx = createEffect(
  async (data: { login: string; password: string; captcha: string }) => {
    const formdata = new FormData();
    formdata.append('login', data.login);
    formdata.append('password', data.password);
    formdata.append('captcha', data.captcha);
    const res = await fetch('http://109.194.37.212:93/api/auth/login', {
      method: 'POST',
      body: formdata,
    });
    if (!res.ok) {
      await res.text().then((text) => {
        throw Error(text);
      });
    }
    return res.text();
  },
);
loginFx.done.watch(({ result }) => {
  localStorage.setItem('wsConnectKey', result.replace(/^"(.*)"$/, '$1'));
  updateSocket();
});
loginFx.fail.watch(({ error }) => {
  alert(error);
});

export const registrationFx = createEffect(
  async (data: {
    login: string;
    password: string;
    passwordConfirm: string;
    name: string;
    genderId: string;
    captcha: string;
  }) => {
    const formdata = new FormData();
    formdata.append('login', data.login);
    formdata.append('password', data.password);
    formdata.append('password_confirm', data.passwordConfirm);
    formdata.append('name', data.name);
    formdata.append('gender_id', data.genderId);
    formdata.append('captcha', data.captcha);
    const res = await fetch('http://109.194.37.212:93/api/auth/register', {
      method: 'POST',
      body: formdata,
    });
    if (!res.ok) {
      await res.text().then((text) => {
        throw Error(text);
      });
    }
    return res.text();
  },
);
registrationFx.done.watch(({ result }) => {
  alert(result);
});
registrationFx.fail.watch(({ error }) => {
  alert(error);
});

export const $isAuth = createStore(
  !!(localStorage.getItem('wsConnectKey') || ''),
).on(loginFx.done, () => true);
