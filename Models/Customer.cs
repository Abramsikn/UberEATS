using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data.Sql;
using System.Web.Mvc;

namespace UberEATS.Models
{
    public class Customer
    {
        public long User(long cust_Id, string cust_Firstname)
        {
            using (SqlConnection connect = new SqlConnection("dbUberEatsEntities1"))
            {
                using (SqlCommand comma = new SqlCommand())
                {
                    comma.Connection = connect;
                    try
                    {
                        comma.Connection.Open();
                        comma.CommandText = "INSERT INTO [dbo].[tblCustomer](cust_Firstname,cust_Lastname,cust_Contact,cust_Cardnumber,cust_Email,cust_Password) VALUES(@cust_Firstname,@cust_Lastname,@cust_Contact,@cust_Cardnumber,@cust_Email,@cust_Password)";
                        //comma.Parameters.AddWithValue("@Firstname", Firstname);
                        //comma.Parameters.AddWithValue("@Lastname", Lastname);
                        //comma.Parameters.AddWithValue("@Contact", Contact);
                        //comma.Parameters.AddWithValue("@Email", Email);
                        //comma.Parameters.AddWithValue("@Password", Password);
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
            return cust_Id;
        }

        internal long User(UserLogin cust_Id)
        {
            throw new NotImplementedException();
        }

        internal int User(tblCustomer value)
        {
            throw new NotImplementedException();
        }

        public UserLogin getUser(string cust_Email, string cust_Password)
        {
            UserLogin use = null;
            string query = "SELECT cust_Email,cust_Password WHERE cust_Email=@cust_Email AND cust_Password=@cust_Password";

            using (SqlConnection connect = new SqlConnection("dbUberEatsEntities1"))
            {
                using (SqlCommand comma = new SqlCommand(query, connect))
                    try
                    {
                        connect.Open();
                        comma.CommandText = "INSERT INTO [dbo].[tblCustomer](cust_Email,cust_Password) VALUES(@cust_Email,@cust_Password)";
                        comma.Parameters.AddWithValue("@cust_Email", cust_Email);
                        comma.Parameters.AddWithValue("@cust_Password", cust_Password);
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