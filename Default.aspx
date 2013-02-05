<%@ Page Language="C#" masterpagefile="../_catalogs/masterpage/minimal.master" title="AppTest" inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	Backbone Reference App
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderPageTitleInTitleArea" runat="server">
	Backbone Reference App  
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
	<script type="text/javascript" src="lib/js/html5.js"></script>
	<link rel="stylesheet" href="lib/css/font-awesome.min.css" />
	<!--[if lte IE 7]>
		<link rel="stylesheet" href="lib/css/font-awesome-ie7.min.css" />
	<![endif]-->
	<link rel="stylesheet" href="lib/css/toastr-1.1.2.min.css" />
	<link rel="stylesheet" href="css/app.css" />
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">

	<!-- Header -->
	<header class="app-section"><h1>Backbone Reference App</h1></header>
	
	<!-- App container -->
	<div id="app-container"></div>

	<!-- Footer -->
	<footer class="app-section">© 2013</footer>
	
	<!-- Load scripts -->
	<script data-main="js/main" src="lib/js/require-2.1.2.min.js"></script>

</asp:Content>