# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### **Ticket #1**: Add **custom_id** field to Agents table where custom ids can be stored

**Acceptance Criteria**
* A new nullable column **custom_id** is added to the Agents table.
* The API and front-end can accept and display custom ids if they exist.

**Effort Estimate:** 2 hours

**Implementation Details**

* Update the Agents table schema to include a new column **custom_id**.
* Add restriction to ensure the **custom_id** field is unique for each Facility.
* Update the API and front-end code to support reading and writing custom ids from the database.

### **Ticket #2**: Modify the getShiftsByFacility function to include the custom id of the Agent assigned to each Shift in its metadata

**Acceptance Criteria**
* The **getShiftsByFacility** function returns the custom id of each Agent, if it exists.
* The front-end displays the custom id of each Agent in the Shifts list.

**Effort Estimate:** 4 hours

**Implementation Details**

* Modify the query in **getShiftsByFacility** to join the Agents table and include the **custom_id** column in the result set.
* Update the **generateReport** function to include **custom_id** in the metadata for each Shift when generating the PDF.
* Update the front-end code to display the **custom_id** in the Shifts list.


### **Ticket #3**: Add a new UI component to the Facilities section of the front-end where custom ids can be set for Agents

**Acceptance Criteria**
* The Facilities section of the front-end includes a new UI component for managing custom ids.
* Users can set and save custom ids for each Agent in the database.

**Effort Estimate:** 6 hours

**Implementation Details**

* Add a new UI component to the Facilities section of the front-end for managing custom ids.
* Add a new API endpoint for saving custom ids to the database.
* Update the front-end code to call the new API endpoint when custom ids are modified.



### **Ticket #4**: Modify the **generateReport** function to use the custom id of each Agent when generating reports, instead of its internal database id

**Acceptance Criteria**
* The **generateReport** function uses the custom id of each Agent when generating reports.
* Users can set and save custom ids for each Agent in the database.

**Effort Estimate:** 2 hours

**Implementation Details**

* Update the generateReport function to use the **custom_id** of each Agent, if it exists.
* Update the front-end code to display the **custom_id** in generated reports.
