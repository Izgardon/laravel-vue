<template>
    <v-app>
        <v-content>
            <v-container>
                <v-layout align-center justify-center>

                    <v-card width="100%" class="mx-auto ">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Login form</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field prepend-icon="person" name="email" label="email" type="email">
                                </v-text-field>
                                <v-text-field id="password" prepend-icon="lock" name="password" label="Password"
                                    type="password"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="login">Login</v-btn>
                        </v-card-actions>
                    </v-card>

                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
 
<script>
export default {
    name: 'LoginPage',
    props: {
        source: String,
    },
    methods: {
        login() { console.log('hello') }
    }
};
</script>
 
<style>

</style>
 