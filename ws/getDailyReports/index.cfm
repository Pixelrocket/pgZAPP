<cfcontent type="application/json" /><cfsilent>
<cfparam name="url.clientid" default="7" />
<cfinvoke component="../zapp" method="getDailyReports" returnvariable="dailyreports">
	<cfinvokeargument name="clientid" value="#url.clientid#" />
</cfinvoke>
</cfsilent><cfoutput>#dailyreports#</cfoutput>