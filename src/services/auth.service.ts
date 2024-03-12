import api from './base.service';

class AuthService {
  // Auth
  async login(data: any) {
    try {
      const response = await api.post('/auth/login', {
        email: data.email,
        password: data.password,
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }

  async logout() {
    try {
      await api.post('/auth/logout');
    } catch (error: any) {
      throw error.response?.data.message || error.message;
    }
  }
}

export default new AuthService();
