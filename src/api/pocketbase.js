import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_PB_URL);
//! 인스턴스 생성시 메서드 사용가능

// PocketBase SDK {}
export default pb;