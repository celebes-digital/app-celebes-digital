<?php

namespace App\Policies;

use App\Models\Konten;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class KontenPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->role->name === 'admin' || $user->role->name === 'marketing';
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Konten $konten): bool
    {
        return $user->role->name === 'admin' || $user->role->name === 'marketing';
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->role->name === 'admin' || $user->role->name === 'marketing';
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Konten $konten): bool
    {
        return $user->role->name === 'admin' || $user->role->name === 'marketing';
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Konten $konten): bool
    {
        return $user->role->name === 'admin' || $user->role->name === 'marketing';
    }

    public function deleteAny(User $user): bool
    {
        return $user->role->name === 'admin' || $user->role->name === 'marketing';
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Konten $konten): bool
    {
        return $user->role->name === 'admin' || $user->role->name === 'marketing';
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Konten $konten): bool
    {
        return $user->role->name === 'admin' || $user->role->name === 'marketing';
    }
}
