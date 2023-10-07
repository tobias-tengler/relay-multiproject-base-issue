## Steps to reproduce

1. Run `yarn`
2. Run `yarn relay`

## Error received

```log
[INFO] querying files to compile...
[INFO] [base-project] compiling...
[INFO] [derived-project] compiling...
thread 'tokio-runtime-worker' panicked at 'Expected location for fragment baseFragment.', crates/relay-typegen/src/write.rs:495:29
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
[INFO] [base-project] compiled documents: 1 reader, 0 normalization, 0 operation text
[ERROR] A thread that the Relay compiler spun up did not shut down gracefully: task 15 panicked
[ERROR] Compilation failed.
[ERROR] Unable to run relay compiler. Error details:
A thread that the Relay compiler spun up did not shut down gracefully: task 15 panicked
```
