# Assignment

Create a ExpressJS Based Rest API, which will have a middleware to check for the empty body of the request, the application will have 4 routes for each User, Group and Project.

User:
1. Route to create a User with { name, id, address, is_active (initially true) }
2. Route to Update a User by ID
3. Route to Get the User Details By ID.
4. Route to make the user inactive by setting the is_active flag to false.

Group:
1. Route to create a Group with { id, group_name, group_code, group_members: ( it will hold the userIds ) }
2. Route to Get the details of the Group using ID, along with the user details associated in group members.
3. Route to Update the Group Data by ID.
4. Route to delete the group.

Project:
1. Route to create a Project with { id, project_name, project_group: { it will hold the group id }, project_cost, project_location }
2. Route to Get the details of the Project along with the details of the Group associated, also if you can fetch the group member details try.
3. Route to Update the Project Data by ID.
4. Route to delete the Project.