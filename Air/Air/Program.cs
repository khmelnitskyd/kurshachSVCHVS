global using Air.Data;

using Microsoft.EntityFrameworkCore;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

//builder.Services.AddCors(options =>
//options.AddPolicy("CORSPolicy", builder=>
//{
//    builder.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000", "https://localhost:7144");
//}));
builder.Services.AddCors(p => p.AddPolicy("corspolicy", build =>
{
    build.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));


// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContex>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors("corspolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
