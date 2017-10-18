using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data.Sql;
using System.Web.Mvc;

namespace UberEATS.Models
{
    public class Restuarant
    {
        public long User(long rest_Id, string rest_Name)
        {
            using (SqlConnection connect = new SqlConnection("dbUberEatsEntities1"))
            {
                using (SqlCommand comma = new SqlCommand())
                {
                    comma.Connection = connect;
                    try
                    {
                        comma.Connection.Open();
                        comma.CommandText = "INSERT INTO [dbo].[tblRestuarant](rest_Name,rest_Address,rest_Contact,rest_Manager,rest_Email,rest_Password,rest_Type) VALUES(@rest_Name,@rest_Address,@rest_Contact,@rest_Manager,@rest_Email,@rest_Password,@rest_Type)";
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
            return rest_Id;
        }

        internal long User(UserLogin Id)
        {
            throw new NotImplementedException();
        }

        internal int User(tblRestuarant value)
        {
            throw new NotImplementedException();
        }

        public UserLogin getRestuarant(string rest_Email, string rest_Password)
        {
            UserLogin use = null;
            string query = "SELECT rest_Email,rest_Password WHERE rest_Email=@rest_Email AND rest_Password=@rest_Password";

            using (SqlConnection connect = new SqlConnection("dbUberEatsEntities1"))
            {
                using (SqlCommand comma = new SqlCommand(query, connect))
                    try
                    {
                        connect.Open();
                        comma.CommandText = "INSERT INTO [dbo].[tblRestuarant](rest_Email,rest_Password) VALUES(@rest_Email,@rest_Password)";
                        comma.Parameters.AddWithValue("@rest_Email", rest_Email);
                        comma.Parameters.AddWithValue("@rest_Password", rest_Password);
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