using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data.Sql;
using System.Web.Mvc;

namespace UberEATS.Models
{
    public class Driver
    {
        public long User(long drv_Id, string drv_Firstname)
        {
            using (SqlConnection connect = new SqlConnection("dbUberEatsEntities1"))
            {
                using (SqlCommand comma = new SqlCommand())
                {
                    comma.Connection = connect;
                    try
                    {
                        comma.Connection.Open();
                        comma.CommandText = "INSERT INTO [dbo].[tblDriver](drv_Firstname,drv_Lastname,drv_Contact,drv_Location,drv_VehicleType,drv_Email,drv_Password) VALUES(@drv_Firstname,@drv_Lastname,@drv_Contact,@drv_Location,@drv_VehicleType,@drv_Email,@drv_Password)";

                        comma.ExecuteNonQuery();
                    }
                    catch (SqlException)
                    {
                        throw;
                    }
                    finally
                    {
                        comma.Connection.Close();
                    }
                }
            }
            return drv_Id;
        }

        internal long User(UserLogin drv_Id)
        {
            throw new NotImplementedException();
        }

        internal int User(tblDriver value)
        {
            throw new NotImplementedException();
        }

        public UserLogin getUser(string drv_Email, string drv_Password)
        {
            UserLogin use = null;
            string query = "SELECT drv_Email,drv_Password WHERE drv_Email=@drv_Email AND drv_Password=@drv_Password";

            using (SqlConnection connect = new SqlConnection("dbUberEatsEntities1"))
            {
                using (SqlCommand comma = new SqlCommand(query, connect))
                    try
                    {
                        connect.Open();
                        comma.CommandText = "INSERT INTO [dbo].[tblDriver](drv_Email,drv_Password) VALUES(@drv_Email,@drv_Password)";
                        comma.Parameters.AddWithValue("@drv_Email", drv_Email);
                        comma.Parameters.AddWithValue("@drv_Password", drv_Password);
                        comma.ExecuteNonQuery();
                    }
                    catch
                    {
                        connect.Close();
                    }
            }
            return use;
        }
    }
}