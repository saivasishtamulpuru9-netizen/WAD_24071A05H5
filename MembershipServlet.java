import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class MembershipServlet extends HttpServlet
{
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
                      throws ServletException, IOException
    {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        String plan = request.getParameter("plan");

        int fee = 0;

        if(plan.equals("Basic"))
        {
            fee = 1000;
        }
        else if(plan.equals("Premium"))
        {
            fee = 2000;
        }
        else if(plan.equals("Gold"))
        {
            fee = 3500;
        }

        out.println("<html>");
        out.println("<head>");
        out.println("<title>Membership Fee</title>");
        out.println("</head>");

        out.println("<body>");

        out.println("<h1>Membership Plan Selected: " + plan + "</h1>");

        out.println("<h1>Membership Fee: Rs." + fee + "</h1>");

        out.println("<h2>Thanks a lot for the Membership</h2>");

        out.println("<br><br><br><br><br><br><br><br>");

        out.println("<hr>");

        out.println("<h3 align='center'>");
        out.println("© 2026 24071A05H5. All rights reserved.");
        out.println("</h3>");

        out.println("</body>");
        out.println("</html>");
    }
}
