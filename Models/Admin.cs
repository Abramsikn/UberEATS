using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data.Sql;
using System.Web.Mvc;

namespace UberEATS.Models
{
    public class Admin
    {
        public long User(long adm_Id, string adm_Firstname)
        {
            using (SqlConnection connect = new SqlConnection("dbUberEatsEntities1"))
            {
                using (SqlCommand comma = new SqlCommand())
                {
                    comma.Connection = connect;
                    try
                    {
                        comma.Connection.Open();
                        comma.CommandText = "INSERT INTO [dbo].[tblAdmin](adm_Firstname,adm_Lastname,adm_Contact,adm_Email,adm_Username,adm_Password) VALUES(@adm_Firstname,@adm_Lastname,@adm_Contact,@cust_Email,@adm_Username,@cust_Password)";
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
            return adm_Id;
        }

        internal long User(UserLogin Id)
        {
            throw new NotImplementedException();
        }

        internal int User(tblAdmin value)
        {
            throw new NotImplementedException();
        }
        
        public UserLogin getAdmin(string adm_Email, string adm_Password)
        {
            UserLogin use = null;
            string query = "SELECT Email,Password WHERE adm_Email=@adm_Email AND adm_Password=@adm_Password";


            using (SqlConnection connect = new SqlConnection("dbUberEatsEntities1"))
            {
                using (SqlCommand comma = new SqlCommand(query, connect))
                    try
                    {
                        connect.Open();
                        comma.CommandText = "INSERT INTO [dbo].[tblCustomer](adm_Email,adm_Password) VALUES(@adm_Email,@adm_Password)";
                        comma.Parameters.AddWithValue("@adm_Username", adm_Email);
                        comma.Parameters.AddWithValue("@adm_Password", adm_Password);
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