# Recipe Cost Calculator

### What it does?
This is a simple calculator for your recipes. Add the prices and the grams and see the cost of each ingredient and the sum for the complete recipe.

### The reason behind..
My brother is a chef and he wanted a tool to calculate the cost of some of the recipes that he is planning to add on his restaurant menu. 


# Connection on the two important components Form and Table

```mermaid
flowchart TB

    subgraph Form Component
    subgraph State
        rows((rows))
    end

    addButton((Add Row)) --> addTableRow;
    addTableRow -->|Adds new row data| UpdateRows;
    UpdateRows --> rows;
    addTableRow -->|Updates| rows;
    rows -->|Passes| TableComponent;
    end

    subgraph Table Component
    subgraph State
        rows((rows))
    end

    rows -->|Passes| removeTableRow;
    removeButton((Remove Row)) --> removeTableRow;
    removeTableRow -->|Removes selected row data| UpdateRows;
    UpdateRows --> rows;
    removeTableRow -->|Updates| rows;
    end

    rows -->|Passes| calculateTotalCost;
    calculateTotalCost -->|Calculates total cost| TotalCost;
    TotalCost -->|Displays| TotalCostValue["Total Cost"];



```
