import './Input.css';

function Input() {
  return (
      <table className="Input">
          <tr>
              <th>a</th>
              <th>b</th>
          </tr>
          <tr>
              <th>c1</th>
              <th>c2</th>
          </tr>
      </table>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;





// public class CustomAuthorizeAttribute : AuthorizeAttribute
// {
//     public override void OnAuthorization(HttpActionContext httpContext)
//     {
//         IEnumerable<string> values;
//         if (httpContext.Request.Headers.TryGetValues("Authorization", out values)
//             && !string.IsNullOrEmpty(values.First()))
//         {
//             if (mf_AuthKeyCompare(values.First()))
//             {
//                 //actionContext.Response =
//                 //        new HttpResponseMessage(System.Net.HttpStatusCode.Accepted);
//             }
//             else
//             {
//                 httpContext.Response =
//                         new HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized);
//                         //new HttpResponseMessage(System.Net.HttpStatusCode.Forbidden);
//             }
//         }
//         else
//         {
//             httpContext.Response =
//                 new HttpResponseMessage(System.Net.HttpStatusCode.BadRequest);
//         }


//     }

//     private bool mf_AuthKeyCompare(string strRequestKey)
//     {
     
//         string strSaltWord = "asdhkjfhsdaljf";
//         int intTerm = 0;
//         int.TryParse(ConfigurationManager.AppSettings["api_key_term"].ToString(), out intTerm);
//         DateTime fstTime = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0);
//         DateTime nowTime = DateTime.Now;
//         TimeSpan interval = nowTime - fstTime;
//         decimal result = Math.Truncate(Convert.ToDecimal(interval.Hours / intTerm));
//         string strSaltKey = DateTime.Now.ToString("yyyyMMdd") + strSaltWord.Substring(Convert.ToInt32(result), 3);

//         string strAuthKey = cls_ApiGenerate.gf_GetAuthKey(
//                                             ConfigurationManager.AppSettings["api_access_key"].ToString()
//                                             , ConfigurationManager.AppSettings["api_security_key"].ToString()
//                                             , strSaltKey);

//         if (strRequestKey.Trim().Equals(strAuthKey))
//             return true;
//         else
//             return false;
//     }

    
//}