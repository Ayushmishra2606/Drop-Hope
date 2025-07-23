import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios"; 

const ProtectedRoute = ({ children, allowedRoles }) => { 
  const [isValid, setIsValid] = useState(null); 
  const [userRole, setUserRole] = useState(null); 

  useEffect(() => {
    const checkAuth = async () => {
      try {
        
        const response = await axios.get(`http://localhost:3000/check-auth`, { 
          withCredentials: true,
        });

        if (response.status === 200 && response.data.user) {
          const { role } = response.data.user;
          setUserRole(role);
          
          if (allowedRoles && !allowedRoles.includes(role)) {
            setIsValid(false); 
            return;
          }
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsValid(false);
      }
    };

    checkAuth();
  }, [allowedRoles]);

  if (isValid === null) return <div className="text-center">Loading...</div>;
  if (!isValid) {
    
    if (userRole && allowedRoles && !allowedRoles.includes(userRole)) {
        
        if (userRole === "individual") return <Navigate to="/user" replace />;
        if (userRole === "ngo") return <Navigate to="/ngo" replace />;
        return <Navigate to="/unauthorized" replace />; 
    }
    return <Navigate to="/login" replace />; 
  }
  return children;
};

export default ProtectedRoute;