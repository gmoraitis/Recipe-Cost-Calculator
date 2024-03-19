# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


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
