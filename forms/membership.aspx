<%@ Page Language="VB" AutoEventWireup="false" CodeFile="membership.aspx.vb" Inherits="forms_membership" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="../css/common.css" rel="stylesheet" />
</head>
<body>
    <p>Please fill in your details below</p>
    <form id="form1" runat="server">
        <div>
            <asp:Label ID="fnLabel" runat="server" AssociatedControlID="firstname" Font-Names="Arial Narrow" Text="First name:"></asp:Label>
&nbsp;
            <asp:TextBox ID="firstname" runat="server" Width="220px"></asp:TextBox>
&nbsp;<asp:RequiredFieldValidator ID="reqfn" runat="server" ControlToValidate="firstname" ErrorMessage="this field is required"></asp:RequiredFieldValidator>
            <br />
&nbsp;<asp:Label ID="lnLabel" runat="server" AssociatedControlID="lastname" Font-Names="Arial Narrow" Text="Last name:"></asp:Label>
&nbsp;<asp:TextBox ID="lastname" runat="server" TabIndex="1" Width="220px"></asp:TextBox>
&nbsp;<asp:RequiredFieldValidator ID="reqln" runat="server" ControlToValidate="lastname" ErrorMessage="this field is required"></asp:RequiredFieldValidator>
            <br />
            <br />
            <asp:Button ID="register" runat="server" BackColor="#FF99FF" Text="Register" />
        </div>
    </form>
</body>
</html>
