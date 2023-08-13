# superVinylDucky
landing website

## Branch structure
- main -> the branch that will be reflected as MVP
- Sprint-[x] -> branch that collects all sprint
- ECBGI-[x] -> feature that we are working on

## Project structure

#### Base Routs
**Root**
/{lang}/ and /
Root of the website


**CV**
/{lang}/radu_dragan/

**Products**
/{lang}/stickers/{name}/

**Category of Products**
/{lang}/stickers_category/{name}/

#### Tools

Accepted Structure
| Structure |  Description|
| ---       | --- |
| id        | the database id of the tool |
| category  | the category of tool in the database |

**category of Tools**
/tools/{structure:category}/{id}/

**category of Tools**
/tools/{structure:id}/{id}/

**category of Tools**
/tools/{structure:tag}/{id}/

#### Store Structure
Namespaced Store