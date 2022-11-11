# Project REST-Rant

REST-Rant is an app where users can review restaurants.



| Syntax  | Description              | Test Text                                       |
| :---    |    :----:                |          ---:                                   |
| Method  | Path                     | Purpose                                         |
| Get     |     /                    | Home page                                       |
| Get     | /places                  | Places index page                               |
| Post    | /places                  |Create a new place                               |
| Get     | /places/new              | Form page for creating a new place              |
| Get     | /places/:id              | Details about a particular place                |
| Put     | /places/:id              | Update a particular place                       |
| Get     |/places/:id/edit          | Form page for editing an existing place         |
| Delete  | /places/:id              |Delete a particular place                        |
| Post    | /places/:id/rant         |Create a rant (comment) about a particular place |
| Delete  | /places/:id/rant/:rantId |Delete a rant (comment) about a particular place |
| Get     |   *                      |  404 page (matches any route not defined above) |








-Example store, Wilmington,CA,Mexican food