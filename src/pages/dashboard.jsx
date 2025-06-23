import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './dashboard.module.css';
import { LogOut, User, Calendar, CheckCircle, Clock, XCircle, Copy, ExternalLink } from 'lucide-react';
import CustomNotification from '../components/notification/CustomNotification';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [demoRequests, setDemoRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success',
  });

  const showNotification = (message, type = 'success') => {
    setNotification({
      isVisible: true,
      message,
      type,
    });
  };

  const hideNotification = () => {
    setNotification(prev => ({
      ...prev,
      isVisible: false,
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      navigate('/login');
      return;
    }

    setUser(JSON.parse(userData));
    fetchDemoRequests();
  }, [navigate]);

  const fetchDemoRequests = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:3001/api/demo/requests', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setDemoRequests(data.requests);
      } else {
        showNotification('Failed to fetch demo requests', 'error');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      showNotification('Network error while fetching data', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showNotification('Copied to clipboard!', 'success');
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className={styles.statusIconSuccess} size={20} />;
      case 'processing':
        return <Clock className={styles.statusIconPending} size={20} />;
      case 'failed':
        return <XCircle className={styles.statusIconError} size={20} />;
      default:
        return <Clock className={styles.statusIconPending} size={20} />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Ready';
      case 'processing':
        return 'Processing';
      case 'failed':
        return 'Failed';
      default:
        return 'Pending';
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <CustomNotification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={hideNotification}
        duration={3000}
      />

      <header className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>
            <User size={24} />
          </div>
          <div>
            <h1>Welcome, {user?.full_name}</h1>
            <p>{user?.email}</p>
          </div>
        </div>
        <button onClick={handleLogout} className={styles.logoutButton}>
          <LogOut size={20} />
          Logout
        </button>
      </header>

      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Your Demo Requests</h2>
            <button 
              onClick={() => navigate('/demo-request')}
              className={styles.newRequestButton}
            >
              Request New Demo
            </button>
          </div>

          {demoRequests.length === 0 ? (
            <div className={styles.emptyState}>
              <Calendar size={48} />
              <h3>No Demo Requests Yet</h3>
              <p>Request your first demo to get started with IndiaBills</p>
              <button 
                onClick={() => navigate('/demo-request')}
                className={styles.primaryButton}
              >
                Request Demo
              </button>
            </div>
          ) : (
            <div className={styles.requestsGrid}>
              {demoRequests.map((request) => (
                <div key={request.id} className={styles.requestCard}>
                  <div className={styles.requestHeader}>
                    <div className={styles.requestInfo}>
                      <h3>{request.organization_name || request.business_name || 'Demo Request'}</h3>
                      <p className={styles.requestDate}>
                        {new Date(request.created_at).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className={styles.statusBadge}>
                      {getStatusIcon(request.status)}
                      <span>{getStatusText(request.status)}</span>
                    </div>
                  </div>

                  {request.demo_credentials && (
                    <div className={styles.credentials}>
                      <h4>Demo Credentials</h4>
                      <div className={styles.credentialsList}>
                        {request.demo_credentials.login_url && (
                          <div className={styles.credentialItem}>
                            <label>Login URL:</label>
                            <div className={styles.credentialValue}>
                              <span>{request.demo_credentials.login_url}</span>
                              <div className={styles.credentialActions}>
                                <button 
                                  onClick={() => copyToClipboard(request.demo_credentials.login_url)}
                                  className={styles.copyButton}
                                  title="Copy to clipboard"
                                >
                                  <Copy size={16} />
                                </button>
                                <a 
                                  href={request.demo_credentials.login_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.openButton}
                                  title="Open in new tab"
                                >
                                  <ExternalLink size={16} />
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {request.demo_credentials.username && (
                          <div className={styles.credentialItem}>
                            <label>Username:</label>
                            <div className={styles.credentialValue}>
                              <span>{request.demo_credentials.username}</span>
                              <button 
                                onClick={() => copyToClipboard(request.demo_credentials.username)}
                                className={styles.copyButton}
                                title="Copy to clipboard"
                              >
                                <Copy size={16} />
                              </button>
                            </div>
                          </div>
                        )}
                        
                        {request.demo_credentials.password && (
                          <div className={styles.credentialItem}>
                            <label>Password:</label>
                            <div className={styles.credentialValue}>
                              <span>••••••••</span>
                              <button 
                                onClick={() => copyToClipboard(request.demo_credentials.password)}
                                className={styles.copyButton}
                                title="Copy to clipboard"
                              >
                                <Copy size={16} />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {request.status === 'failed' && (
                    <div className={styles.errorMessage}>
                      <p>Demo creation failed. Please try again or contact support.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;