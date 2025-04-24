<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Management User</title>
    <link rel="stylesheet" href="{{ asset('template/plugins/fontawesome-free/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('template/dist/css/adminlte.min.css?v=3.2.0') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.4.10/sweetalert2.min.css">
</head>

<body class="hold-transition sidebar-mini sidebar-collapse">
    <div class="wrapper">

        @include('layouts.navbar')
        @include('layouts.sidebar')

        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">User Management</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <a href="#" class="btn btn-primary mb-3" data-toggle="modal" data-target="#addUserModal">
                        <i class="fa fa-plus"></i> Add User
                    </a>
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center">
                                <th>No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Level</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($users as $user)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $user->name }}</td>
                                <td>{{ $user->username }}</td>
                                <td>{{ $user->level }}</td>
                                <td>{{ $user->status }}</td>
                                <td>
                                    <button class="btn btn-warning btn-edit"
                                        data-id="{{ $user->id_user }}"
                                        data-name="{{ $user->name }}"
                                        data-username="{{ $user->username }}"
                                        data-level="{{ $user->level }}"
                                        data-status="{{ $user->status }}">
                                        <i class="fa fa-pencil-alt"></i> Edit
                                    </button>

                                    @if ($user->status == 'Active')
                                    <button class="btn btn-danger btn-deactivate"
                                        data-id="{{ $user->id_user }}">
                                        <i class="fa fa-ban"></i> Deactivate
                                    </button>
                                    @endif
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Edit User Modal -->
        <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="editUserModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editUserModalLabel">Edit User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form id="editUserForm" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="modal-body">
                            <input type="hidden" id="edit_user_id" name="id_user">
                            <div class="form-group">
                                <label for="edit_name">Name</label>
                                <input type="text" class="form-control" id="edit_name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="edit_username">Username</label>
                                <input type="text" class="form-control" id="edit_username" name="username" required>
                            </div>
                            <div class="form-group">
                                <label for="edit_password">Password (Leave empty if not changing)</label>
                                <input type="password" class="form-control" id="edit_password" name="password">
                            </div>
                            <div class="form-group">
                                <label for="edit_level">Level</label>
                                <select class="form-control" id="edit_level" name="level" required>
                                    <option value="Owner">Owner</option>
                                    <option value="Staff">Staff</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="edit_status">Status</label>
                                <select class="form-control" id="edit_status" name="status" required>
                                    <option value="Active">Active</option>
                                    <option value="Deactive">Deactive</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-info">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Add User Modal -->
        <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addUserModalLabel">Add User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form id="addUserForm" action="{{ route('users.store') }}" method="POST">
                        @csrf
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="add_name">Name</label>
                                <input type="text" class="form-control" id="add_name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="add_username">Username</label>
                                <input type="text" class="form-control" id="add_username" name="username" required>
                            </div>
                            <div class="form-group">
                                <label for="add_password">Password</label>
                                <input type="password" class="form-control" id="add_password" name="password" required>
                            </div>
                            <div class="form-group">
                                <label for="add_level">Level</label>
                                <select class="form-control" id="add_level" name="level" required>
                                    <option value="Owner">Owner</option>
                                    <option value="Staff">Staff</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="add_status">Status</label>
                                <select class="form-control" id="add_status" name="status" required>
                                    <option value="Active">Active</option>
                                    <option value="Deactive">Deactive</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-success">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deactivateModal" tabindex="-1" aria-labelledby="deactivateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <form method="POST" id="deactivateForm">
                    @csrf
                    @method('PUT')
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="deactivateModalLabel">Confirm Deactivation</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p>Are you sure you want to deactivate this user?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-danger">Deactivate</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


        <script src="{{ asset('template/plugins/jquery/jquery.min.js') }}"></script>
        <script src="{{ asset('template/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
        <script src="{{ asset('template/dist/js/adminlte.min.js?v=3.2.0') }}"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        <script>
            $(".btn-edit").click(function() {
                let userId = $(this).data("id");
                let name = $(this).data("name");
                let username = $(this).data("username");
                let level = $(this).data("level");
                let status = $(this).data("status");

                $("#edit_user_id").val(userId);
                $("#edit_name").val(name);
                $("#edit_username").val(username);
                $("#edit_level").val(level);
                $("#edit_status").val(status);

                let updateUrl = "{{ route('users.update', ':id') }}".replace(':id', userId);
                $("#editUserForm").attr("action", updateUrl);

                $("#editUserModal").modal("show");
            });

            $(".btn-deactivate").click(function() {
                let userId = $(this).data("id");

                // Update the form action URL with the correct route to deactivate user
                let deactivateUrl = "{{ route('users.deactivate', ':id') }}".replace(':id', userId);
                $("#deactivateForm").attr("action", deactivateUrl);

                // Show the deactivate confirmation modal
                new bootstrap.Modal(document.getElementById('deactivateModal')).show();
            });
        </script>

        @if(session('success'))
        <script>
            Swal.fire({
                position: "center",
                icon: "success",
                title: "{{ session('success') }}",
                showConfirmButton: false,
                timer: 2000
            });
        </script>
        @endif

</body>

</html>