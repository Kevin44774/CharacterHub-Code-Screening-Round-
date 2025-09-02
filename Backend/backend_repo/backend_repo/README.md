# Posts & Comments API

A robust Django REST Framework API designed to deliver a list of posts with their associated comments, optimized for modern frontend applications with features like infinite scrolling.

![Status: Completed](https://img.shields.io/badge/status-completed-brightgreen)
![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)
![Django](https://img.shields.io/badge/Django-4.2+-092E20.svg)
![Django REST Framework](https://img.shields.io/badge/DRF-3.14+-A30000.svg)

---

## ✨ Key Features

-   **Paginated Posts:** Efficiently load posts for infinite scroll interfaces.
-   **Nested Comments:** Each post includes a preview of its latest comments.
-   **Comment Count:** Quickly see the engagement on each post with a total comment count.
-   **RESTful Design:** Built with the powerful Django REST Framework for a clean, browsable API.
-   **Admin Panel:** Comes with a built-in Django admin panel for easy data management.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:
-   Python 3.8+
-   `pip` (Python package installer)
-   `venv` (recommended for virtual environments)

### ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    # Create the virtual environment
    python -m venv venv

    # Activate it
    # On Windows
    venv\Scripts\activate

    # On macOS/Linux
    source venv/bin/activate
    ```

3.  **Install the required dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
    *Note: The `requirements.txt` file should contain dependencies like `Django` and `djangorestframework`.*

4.  **Apply database migrations:**
    ```bash
    python manage.py migrate
    ```

5.  **Create a superuser to access the Admin Panel:**
    ```bash
    python manage.py createsuperuser
    ```
    (Follow the prompts to create your admin username and password)

## 🏃‍♂️ Running the Application

1.  **Start the development server:**
    ```bash
    python manage.py runserver
    ```
    The application will be available at `http://127.0.0.1:8000/`.

2.  **Run tests to ensure everything is working correctly:**
    ```bash
    python manage.py test apps
    ```

## 📡 API Endpoints

Once the server is running, you can access the following endpoints:

| URL                             | Description                                 |
| ------------------------------- | ------------------------------------------- |
| `http://127.0.0.1:8000/`        | The Django REST Framework API root.         |
| `http://127.0.0.1:8000/admin/`  | The Django Admin Panel for managing data.   |
| `http://127.0.0.1:8000/api/posts/` | **The main endpoint for fetching posts.** |

### Endpoint: `GET /api/posts/`

Returns a paginated list of posts, ordered by the most recent timestamp.

#### Query Parameters

| Parameter   | Type    | Description                                   | Default |
|-------------|---------|-----------------------------------------------|---------|
| `page`      | integer | The page number to retrieve.                  | 1       |
| `page_size` | integer | The number of posts to return per page.       | 10      |

#### Example Request

```http
GET [http://127.0.0.1:8000/api/posts/?page=1&page_size=5](http://127.0.0.1:8000/api/posts/?page=1&page_size=5)